export const extractFromJson = (data, key) => {
  // Case 1: full Gatsby query result
  if (data?.allContentfulJsonContent?.nodes) {
    const children = data.allContentfulJsonContent.nodes
      .flatMap(node => node.childrenContentfulJsonContentObjectJsonNode || []);

    for (const child of children) {
      const raw = child?.internal?.content;
      if (!raw) continue;

      const json = JSON.parse(raw);
      if (json && json[key]) return json[key];
    }
  }

  // Case 2: direct JSON content
  if (data?.internal?.content) {
    const json = JSON.parse(data.internal.content);
    return key ? json[key] : json;
  }

  return null;
};
