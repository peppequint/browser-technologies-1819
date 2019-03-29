<p align="center">
	<h1 align="center">Browser Technologies</h1>
</p>
<p align="center" width="480">
	For this exercise I forked my OBA application. I tested different features and noted the findings below.
	<br>
	This application is based on finding postcard at the OBA. It will show twenty results and it is possible to go to a detail page of the postcard.
</p>
<br>

## Table of contents

- [Colour](#colour)
- [Images](#images)
- [Custum fonts](#custom-fonts)
- [Mouse & trackpad](#mouse-trackpad)
- [Broadband](#broadband)
- [Javascript](#javascript)
- [localStorage](#localstorage)
- [Screenreader](#screenreader)

## Colour

When the colours of the application are adjusted, this mainly affects the postcards. The logo and font of the application doesn't matter much. The application is about the postcards.

## Images

The functionality of the application falls away immediately. It's about the images. In addition, the alt-tags are not properly set, so a screen reader does not work.

## Custom fonts

The Avenir font is used. If this is not supported, a fallback is set and `sans-serif` is used.

## Mouse & trackpad

It is possible to do searches and get the results shown with the tab button. When the detail button is selected, enter can be pressed to navigate to the detail page.

## Broadband

API gets really slow and it is really frustrating to use.

## Javascript

The application can no longer be used. No functionality works anymore.

## localStorage

When localStorage is off, a new request must be made to the API to retrieve the details. This makes it longer to display the detail page.

## Screenreader

This application is bad for a screen reader. Semantically it is badly constructed with many div tags and no alt tags for images.
