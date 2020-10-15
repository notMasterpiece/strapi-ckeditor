/**
 * @license Copyright (c) 2014-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave.js';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight.js';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';

import SimpleUploadAdapter from './simpleuploadadapterstrapi';

export default class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Bold,
	Link,
	List,
	Code,
	Image,
	Table,
	Italic,
	Indent,
	Heading,
	Autosave,
	FontSize,
	TodoList,
	Alignment,
	FontColor,
	Highlight,
	Subscript,
	Underline,
	Autoformat,
	BlockQuote,
	ImageStyle,
	MediaEmbed,
	Essentials,
	Paragraph,
	ImageUpload,
	ImageResize,
	ImageCaption,
	ImageToolbar,
	RemoveFormat,
	TableToolbar,
	HorizontalLine,
	PasteFromOffice,
	MediaEmbedToolbar,
	SpecialCharacters,
	TableProperties,
	FontBackgroundColor,
	SimpleUploadAdapter,
	TableCellProperties,
];

Editor.defaultConfig =  {
	toolbar: {
		items: [
			'heading',
			'|',
			'undo',
			'redo',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'|',
			'link',
			'imageUpload',
			'mediaEmbed',
			'insertTable',
			'specialCharacters',
			'|',
			'fontFamily',
			'fontSize',
			'fontColor',
			'fontBackgroundColor',
			'highlight',
			'|',
			'alignment',
			'indent',
			'outdent',
			'|',
			'numberedList',
			'bulletedList',
			'code',
			'blockQuote',
			'|',
			'removeFormat'
		]
	},
	language: 'en',
	image: {
		toolbar: [
			'imageTextAlternative',
			'imageStyle:alignLeft',
			'imageStyle:full',
			'imageStyle:alignRight'
		],

		styles: [
			'full',
			'alignLeft',
			'alignRight'
		],

		upload: {
			types: ['jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff', 'svg+xml']
		}
	},

	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableProperties',
			'tableCellProperties'
		]
	},
	mediaEmbed: {
		previewsInData: true,
	},
	heading: {
		options: [
			{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },

			{
				model: 'headingPageTitle',
				view: {
					name: 'h1',
				},
				title: 'Page Title',
				class: 'ck-heading_heading1_page_title',

				// It needs to be converted before the standard 'heading2'.
				converterPriority: 'high'
			},

			{ model: 'heading1', view: 'h2', title: 'Heading 1', class: 'ck-heading_heading1' },
			{ model: 'heading2', view: 'h3', title: 'Heading 2', class: 'ck-heading_heading2' },
			{ model: 'heading3', view: 'h4', title: 'Heading 3', class: 'ck-heading_heading3' },
		]
	},
	fontColor: {
		colors: [
			{
				color: 'hsl(0, 0%, 0%)',
				label: 'Black'
			},
			{
				color: 'hsl(0, 0%, 30%)',
				label: 'Dim grey'
			},
			{
				color: 'hsl(0, 0%, 60%)',
				label: 'Grey'
			},
			{
				color: 'hsl(0, 0%, 90%)',
				label: 'Light grey'
			},
			{
				color: 'hsl(0, 0%, 100%)',
				label: 'White',
				hasBorder: true
			},
			{
				color: '#ff615e',
				label: 'Red'
			},
			{
				color: 'hsl(30, 75%, 60%)',
				label: 'Orange'
			},
			{
				color: 'hsl(60, 75%, 60%)',
				label: 'Yellow'
			},
			{
				color: 'hsl(201, 31%, 51%)',
				label: 'Light green'
			},
			{
				color: 'hsl(138, 64%, 39%)',
				label: 'Green'
			},
			{
				color: 'hsl(150, 75%, 60%)',
				label: 'Aquamarine'
			},
			{
				color: 'hsl(180, 75%, 60%)',
				label: 'Turquoise'
			},
			{
				color: 'hsl(201, 95%, 56%)',
				label: 'Light blue'
			},
			{
				color: 'hsl(224, 65%, 36%)',
				label: 'Blue'
			},
			{
				color: 'hsl(270, 75%, 60%)',
				label: 'Purple'
			}
		],
	},
	fontBackgroundColor: {
		colors: [
			{
				color: 'hsl(0, 0%, 0%)',
				label: 'Black'
			},
			{
				color: 'hsl(0, 0%, 30%)',
				label: 'Dim grey'
			},
			{
				color: 'hsl(0, 0%, 60%)',
				label: 'Grey'
			},
			{
				color: 'hsl(0, 0%, 90%)',
				label: 'Light grey'
			},
			{
				color: 'hsl(0, 0%, 100%)',
				label: 'White',
				hasBorder: true
			},
			{
				color: 'hsl(0, 75%, 60%)',
				label: 'Red'
			},
			{
				color: 'hsl(30, 75%, 60%)',
				label: 'Orange'
			},
			{
				color: 'hsl(60, 75%, 60%)',
				label: 'Yellow'
			},
			{
				color: 'hsl(201, 31%, 51%)',
				label: 'Light green'
			},
			{
				color: 'hsl(138, 64%, 39%)',
				label: 'Green'
			},
			{
				color: 'hsl(150, 75%, 60%)',
				label: 'Aquamarine'
			},
			{
				color: 'hsl(180, 75%, 60%)',
				label: 'Turquoise'
			},
			{
				color: 'hsl(201, 95%, 56%)',
				label: 'Light blue'
			},
			{
				color: 'hsl(224, 65%, 36%)',
				label: 'Blue'
			},
			{
				color: 'hsl(270, 75%, 60%)',
				label: 'Purple'
			}
		],
	},
	licenseKey: '',
}
