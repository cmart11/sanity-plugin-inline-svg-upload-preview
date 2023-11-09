import React from 'react';
import SvgUploadPreview from './SvgUploadPreview';
import {definePlugin} from 'sanity'

const svgUploadPreview = definePlugin({
  title: 'Svg Upload Inline Preview',
  name: 'svgUploadPreview',
  type: 'string',
  inputComponent: SvgUploadPreview
});

export default svgUploadPreview;
