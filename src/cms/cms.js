import CMS from 'netlify-cms';
import 'netlify-cms/dist/cms.css';

import PagePreview from './preview-templates/PagePreview';
import PostPreview from './preview-templates/PostPreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('page', PagePreview);
CMS.registerPreviewTemplate('post', PostPreview);
