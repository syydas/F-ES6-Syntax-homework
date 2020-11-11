const inject = (items, sections) => {
    let itemsCopy = [...items];
    sections.sort((former, latter) => latter.index - former.index)
        .forEach(section => {
            itemsCopy.splice(section.index, 0, section.content)
        });
    return itemsCopy;
}
export {inject};
