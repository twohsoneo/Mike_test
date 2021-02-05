
# Component Set Starter
This is a starter seed for a **NEW** component set library with all the necessary packages baked in for working with [storybook](https://storybook.js.org/) and [@lumavate/core](https://github.com/Lumavate-Team/lumavate-core).  

## Initial setup
1. Go to [https://github.com/Lumavate-Team/component-set-seed](https://github.com/Lumavate-Team/component-set-seed)
2. Click *Use This Template*
3. Create new repository.
4. Clone it locally.
5. Cd into new directory
6. Run ```npm-install```
7. Update the package.json **name** property with the new component set's name.
8. Update the stencil.config.ts **namespace** property, this is the name that will be used in directIncludes/directCssIncludes ```<namespace>.js```
9. Develop as usual.

## Component Development
Components should live under src/components like they currently do.

## Modular component.json
@lumavate/core makes it possible to modularize the components into single files.  To do this, under each component folder, create one or more *component-name*.component.json files. Make sure its component without an **s** at the end.

This file should look like a standard components json, but contain just one component and no styleData, that gets brought in from @lumavate/core during the build and compiled all into one large components.json in the /dist folder.

 example **standard-card.component.json**
   
    {
    	"components":[
    	{
    		"type":"luma-ion-standard-card",
    		"template":"...",
    		"properties":[...]
    	}]
    }


## Storybook Development
Please refer to [Storybook Development in @lumavate/core](https://github.com/Lumavate-Team/lumavate-core#storybook-development) for how to write stories and run them. 



