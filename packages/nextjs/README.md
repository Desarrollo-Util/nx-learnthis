# Next JS plugin for NX  

An [Nx](https://nx.dev) plugin for developing [NextJS](https://nextjs.org) applications with [Tailwind CSS](https://tailwindcss.com).

## Usage

This plugin contains NextJs generators and executors

### Generator

First of all, we have to create an NX workspace:

	npx create-nx-workspace

And select the following options:

	? Workspace name (e.g., org name)       my-workspace-name
	? What to create in the new workspace   empty

Inside our new workspace folder, install the plugin:

	npm i nx-learnthis-nextjs

And finally, run the project generator:

	nx g nx-learnthis-nextjs/nextjs:nextjs

### Executor

Coming soon...

## Developing and running plugin locally

You may want to modify the plugin and try it out for yourself. 

In that case, the first thing you should do is clone the [nx-learnthis](https://github.com/Desarrollo-Util/nx-learnthis) repository:

	git clone https://github.com/Desarrollo-Util/nx-learnthis.git

	OR

	git clone git@github.com:Desarrollo-Util/nx-learnthis.git

Install dependencies:

	npm i

### Generator

Build the generator: 

	nx build nextjs

Go to the dist folder: 

	cd nx-learnthis/dist/packages/nextjs

Link it to your local npm repository:

	npm link

Create an NX workspace:

	npx create-nx-workspace

And select the following options:

	? Workspace name (e.g., org name)       my-workspace-name
	? What to create in the new workspace   empty

Inside our new workspace folder, link the plugin:

	npm link nx-learnthis-nextjs

And finally, run the project generator:

	nx g nx-learnthis-nextjs/nextjs:nextjs

## Organization

This project is part of [Desarrollo Util's](https://github.com/Desarrollo-Util) organization.
## Maintainers

[@Josyto](https://github.com/Josyto)
[@pablocdev](https://github.com/pablocdev)
[@SirReiva](https://github.com/SirReiva)
