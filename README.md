# jonathansack-io | Tasks Management Report

## General Requirements
- Only use SCSS variables for style property values 
- Split Vue elements into separate components
- The layout of `https://kusama.network/` is referred to as "original layout"


## Tasks
- [x] js000-project-setup
- [ ] js001-header-ui
- [ ] js002-home-section-hero-ui
- [ ] js003-home-section-portfolio-ui
- [ ] js004-hero-section-ui
- [ ] js005-previous-experience-section-ui
- [ ] js006-testimonials-section-ui
- [ ] js007-project-features-section-ui
- [ ] js008-daily-tools-section-ui
- [ ] js009-calendar-ui
- [ ] js010-footer-ui
- [ ] js011-gallery
- [ ] js012-contact-page-ui-and-integration


## Front-End (Vue.js)
### [JS001] - Header Section UI
```html
<header>
	<img src="{{ image.url }}" alt="logo" id="logo">

	<nav>
		<ul>
			<li><span class="nav-item">Home</span></li>
			<li><span class="nav-item">Portfolio</span></li>
			<!--
			DISABLED
			<li><span class="nav-item">Contact</span></li>
			-->
		</ul>
	</nav>	

	<div class="social-media">
		<ul>
			<li><div #id="github"></div></li>
			<li><div #id="linkedin"></div></li>
		</ul>
	</div>

	<button id="header-cta" class="cta">Contact</button>
</header>
```
- - - -


### [JS002] - Home Section Hero UI
#### Notes:
— The home animation will be with `Lottie`. Any temporary file can be use for now instead.
<img src="/src/screenshots/02-home-section-hero.png">
- - - -


### [JS003] - Home Section Portfolio UI
#### Notes:
— Dvis are clickable.
— All background `img`  will be provided.
— Keep original animation
<img src="/src/screenshots/03-home-section-portfolio.png">
- - - -


### [JS004] - Hero Section UI
Each section is composed of the following:
```
- Header
- Paragraphs
- Image
```
- - - -


### [JS005] - Previous Experience Section
<img src="/src/screenshots/05-past-experience-section-companies.png">
- - - -


### [JS006] - Testimonials Section UI
#### Notes:
— The **white** layout is the **correct layout**
— The **black** layout has the right **font** and **color scheme**
<img src="/src/screenshots/06-testimonials-section-font-and-color-scheme.png">

<img src="/src/screenshots/06-testimonials-section-layout.png">

```
div#container
	h3
	div#recommendators
		ul
			li
				img
				p.linkedin-member
				p.linkedin-member-title
			...
	h4
	div.stars
	p.recommendation
```
- - - -


### [JS007] - Project Features Section UI
#### Notes:
— Same style as original layout
- - - -


### [JS008] - Daily Tools Section UI
#### Notes:
— The yellow circle are just a representation of additional logos
<img src="/src/screenshots/08-daily-tools-section.png">
- - - -

### [JS009] - Calendar Section UI
<img src="/src/screenshots/09-calendar-section.png">

#### Notes: 
— Dates have the following layout and will be laid out in as an horizontal list


### [JS010] - Footer Section
#### Note:
— same style as original layout
<img src="/src/screenshots/10-footer-section.png">
- - - -


### [JS011] - Gallery Page
#### Notes:
— Layout TDB


- - - -

### [JS012] - Contact Page UI & Integration
#### Notes: 
— Divs laid out similar to layout below (not style and color scheme)
<img src="/src/screenshots/12-contact-page.png">

#task #jonathansack-io #front-end
