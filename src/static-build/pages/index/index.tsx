/**
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { h, FunctionalComponent } from 'preact';

import baseCss from 'css:./base.css';
import initialCss from 'initial-css:';
import { allSrc } from 'client-bundle:client/initial-app';
import favicon from 'url:static-build/assets/favicon.ico';
import { escapeStyleScriptContent } from 'static-build/utils';
import Intro from 'shared/prerendered-app/Intro';

interface Props {}

const Index: FunctionalComponent<Props> = () => (
  <html lang="en">
    <head>
      <title>
        Squoosh | 免费高性能在线图片压缩及格式转换工具 | 开发者工具箱
      </title>
      <meta
        name="description"
        content="性能最好的浏览器端图片压缩工具，可压缩任意格式图片(JPEG/PNG/Webp/Avif)并支持格式转化，并可比较各种压缩方式的压缩比例从而找出最适合的图片格式。"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link rel="shortcut icon" href={favicon} />
      <meta name="theme-color" content="#ff3385" />
      <link rel="manifest" href="/manifest.json" />
      <style
        dangerouslySetInnerHTML={{ __html: escapeStyleScriptContent(baseCss) }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: escapeStyleScriptContent(initialCss),
        }}
      />
    </head>
    <body>
      <div id="app">
        <Intro />
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: escapeStyleScriptContent(allSrc),
        }}
      />
    </body>
  </html>
);

export default Index;
