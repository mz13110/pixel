GlobalState.sub("toolbox.selection", (v) => {
    document.querySelector("px-tool-info").tool = ToolRegistry.get(v)

    document.querySelector("px-canvas").tool = ToolRegistry.get(v)
})
if(!GlobalState.get("toolbox.selection")) GlobalState.set("toolbox.selection", "pencil")

document.querySelector("px-palette-manager").$section = document.querySelector("px-palette-manager").parentElement
document.querySelector("px-tool-info").$section = document.querySelector("px-tool-info").parentElement