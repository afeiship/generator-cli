# <%= project_name %>
> <%= description %>

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

![snapshot](https://tva1.sinaimg.cn/large/0081Kckwgy1gk87ynhkbaj30u60asasp.jpg)

## installation
```shell
# public
npm i -g @<%= scope %>/<%= project_name %>

# private
git clone https://github.com/afeiship/<%= project_name %>.git
cd <%= project_name %>
npm i && npm link
```

## usage
~~~
__USAGE__
~~~

## license
Code released under [the MIT license](https://github.com/afeiship/<%= project_name %>/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@<%= scope %>/<%= project_name %>
[version-url]: https://npmjs.org/package/@<%= scope %>/<%= project_name %>

[license-image]: https://img.shields.io/npm/l/@<%= scope %>/<%= project_name %>
[license-url]: https://github.com/afeiship/<%= project_name %>/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@<%= scope %>/<%= project_name %>
[size-url]: https://github.com/afeiship/<%= project_name %>/blob/master/dist/<%= project_name %>.min.js

[download-image]: https://img.shields.io/npm/dm/@<%= scope %>/<%= project_name %>
[download-url]: https://www.npmjs.com/package/@<%= scope %>/<%= project_name %>
