import React, { useCallback } from 'react';
import SanitizedSVG from './sanitizedSvg';
import styles from './SvgUploadPreview.css';
import { Stack } from '@sanity/ui';
import { set, unset } from 'sanity';

const SvgStringInput = (props) => {
  const { onChange, value = '', type, level } = props;

  const handleChange = useCallback(
    (event) => {
      const file = event.target.files?.[0];
      if (file?.type !== 'image/svg+xml') {
        // eslint-disable-next-line no-alert
        window.alert(`The type of the selected file is not SVG: ${file?.type}`);
        return;
      }
      const reader = new FileReader();
      reader.onload = (readerEvent) => {
        onChange(set(readerEvent.target.result));
      };
      reader.readAsText(file);
    },
    [onChange]
  );

  const clickedRemoveSvg = () => {
    if (window.confirm('Are you sure you want to remove the SVG?')) {
      onChange(unset());
    }
  };

  return (
    <Stack space={3}>
      <input
        accept=".svg"
        type="file"
        onChange={handleChange}
        name="svg_upload"
        style={{ display: 'none' }}
      />
      <label htmlFor="uploadInput">Upload SVG</label>
      
      <div className={`${styles.svgPreviewBackground} ${value && styles.hasValue}`}>
        {value && (
          <div className={styles.svgWrapper}>
            <SanitizedSVG html={value} />
            <button
              className={styles.updateSvg}
              type="button"
              onClick={clickedRemoveSvg}
            >
              Remove SVG
            </button>
          </div>
        )}
      </div>
    </Stack>
  );
};

export default SvgStringInput;
