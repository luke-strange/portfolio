import lume from "lume/mod.ts";
import base_path from "lume/plugins/base_path.ts";
import date from "lume/plugins/date.ts";
import metas from "lume/plugins/metas.ts";
import postcss from "lume/plugins/postcss.ts";
import json from "lume/core/loaders/json.ts";

const site = lume({
    src: './src',
    location: new URL("https://luke-strange.github.io/portfolio/"),
  });

site.use(base_path());
site.use(date());
site.use(metas({
    defaultPageData: {
      title: 'title',
    },
  }));
site.use(postcss());
// site.loadData([json]);
site.copy('.nojekyll');

export default site;
