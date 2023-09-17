function convertToKebabCase(camelCase) {
    // 将驼峰命名的字符串拆分为单词
    const words = camelCase.split(/(?=[A-Z])/);
  
    // 将单词转换为小写，并使用短横线连接它们
    const kebabCase = words.map(word => word.toLowerCase()).join('-');
  
    return kebabCase;
  }