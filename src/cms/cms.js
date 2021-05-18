import CMS from "netlify-cms-app";
import "../assets/sass/styles.sass";
import HomePagePreview from "./preview-templates/HomePagePreview";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ArticlePreview from "./preview-templates/ArticlePreview";
import PricingPagePreview from "./preview-templates/PricingPagePreview";
import ContactPagePreview from "./preview-templates/ContactPagePreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import ResourcePagePreview from "./preview-templates/ResourcePagePreview";
import CommunityPagePreview from "./preview-templates/CommunityPagePreview";
import TeamPagePreview from "./preview-templates/TeamPagePreview";

CMS.init({
  config: {
    backend: {
      name: "git-gateway",
    },
  },
});
CMS.registerPreviewStyle("/styles.css");
CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("pricing", PricingPagePreview);
CMS.registerPreviewTemplate("contact", ContactPagePreview);
CMS.registerPreviewTemplate("blog", ArticlePreview);
CMS.registerPreviewTemplate("product", ProductPagePreview);
CMS.registerPreviewTemplate("resource", ResourcePagePreview);
CMS.registerPreviewTemplate("community", CommunityPagePreview);
CMS.registerPreviewTemplate("team", TeamPagePreview);
