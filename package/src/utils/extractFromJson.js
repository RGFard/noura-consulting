export const extractFromJson = (data, key) => {
  if (!data?.allContentfulJsonContent?.nodes) return null;

  const children = data.allContentfulJsonContent.nodes
    .flatMap(node => node.childrenContentfulJsonContentObjectJsonNode || []);

  for (const child of children) {
    const raw = child?.internal?.content;
    if (!raw) continue;

    const json = JSON.parse(raw);

    if (json && json[key]) {
      return json[key];
    }
  }

  return null;
};