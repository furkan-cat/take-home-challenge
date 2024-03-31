const handleAuthorSearch = (searched, originalData) => {
  if (!searched.length) {
    const uniqueArr = [
      ...new Map(
        originalData.map((item) => [item.user["login"], item])
      ).values(),
    ];

    return uniqueArr;
  } else {
    const filtered = originalData.filter((item) =>
      item.user.login.toLowerCase().includes(searched.toLowerCase())
    );

    return filtered;
  }
};

const handleLabelsSearch = (searched, originalData) => {
  const newArr = [];

  const labels = [
    ...new Set(
      originalData.map((item, i) =>
        item.labels.map((labels, x) => labels["name"])
      )
    ).values(),
  ];
  const colors = [
    ...new Set(
      originalData.map((item, i) =>
        item.labels.map((labels, x) => labels["color"])
      )
    ).values(),
  ];

  const uniqueLabels = [...new Set(labels.flat())];
  const uniqueColors = [...new Set(colors.flat())];

  for (let i = 0; i < uniqueLabels.length; i++) {
    const data = { label: uniqueLabels[i], color: uniqueColors[i] };
    newArr.push(data);
  }
  if (!searched.length) {
    return newArr;
  } else {
    const filtered = newArr.filter((item) =>
      item.label.toLowerCase().includes(searched.toLowerCase())
    );

    return filtered;
  }
};

const calculateIssueCount = (data) => {
  let open = null;
  let closed = null;

  data.map((item) => {
    item.state === "open" ? (open += 1) : (closed += 1);
  });

  return { open, closed };
};

export { handleAuthorSearch, handleLabelsSearch, calculateIssueCount };
