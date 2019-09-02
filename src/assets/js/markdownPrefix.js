// Create reference instance
const marked = require('marked');

// Get reference
const renderer = new marked.Renderer();

// Override function
renderer.code = function (code, infostring, escaped) {
  var lang = (infostring || '').match(/\S*/)[0];
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre class="rw-pre"><code>'
      + (escaped ? code : escape(code, true))
      + '</code></pre>';
  }

  return '<pre class="rw-pre"><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '</code></pre>\n';
};

renderer.blockquote = function (quote) {
  return '<blockquote class="rw-blockquote">\n' + quote + '</blockquote>\n';
};

renderer.html = function (html) {
  return html;
};

renderer.heading = function (text, level, raw, slugger) {
  if (this.options.headerIds) {
    return '<h'
      + level
      + ' class="rw-h'
      + level
      + ' id="'
      + this.options.headerPrefix
      + slugger.slug(raw)
      + '">'
      + text
      + '</h'
      + level
      + '>\n';
  }
  // ignore IDs
  return '<h' + level + ' class="rw-h' + level + '>' + text + '</h' + level + '>\n';
};

renderer.hr = function () {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

renderer.list = function (body, ordered, start) {
  var type = ordered ? 'ol' : 'ul',
    startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
  return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
};

renderer.listitem = function (text) {
  return '<li class="rw-li">' + text + '</li>\n';
};

renderer.checkbox = function (checked) {
  return '<input '
    + (checked ? 'checked="" ' : '')
    + 'disabled="" type="checkbox"'
    + (this.options.xhtml ? ' /' : '')
    + '> ';
};

renderer.paragraph = function (text) {
  console.log('pppp')
  return '<p class="rw-p">' + text + '</p>\n';
};

renderer.table = function (header, body) {
  if (body) body = '<tbody>' + body + '</tbody>';

  return '<table class="rw-table">\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + body
    + '</table>\n';
};

renderer.tablerow = function (content) {
  return '<tr>\n' + content + '</tr>\n';
};

renderer.tablecell = function (content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' align="' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
renderer.strong = function (text) {
  return '<strong>' + text + '</strong>';
};

renderer.em = function (text) {
  return '<em>' + text + '</em>';
};

renderer.codespan = function (text) {
  return '<code>' + text + '</code>';
};

renderer.br = function () {
  return this.options.xhtml ? '<br/>' : '<br>';
};

renderer.del = function (text) {
  return '<del>' + text + '</del>';
};

renderer.link = function (href, title, text) {
  href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
  if (href === null) {
    return text;
  }
  var out = '<a href="' + escape(href) + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

renderer.image = function (href, title, text) {
  href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
  if (href === null) {
    return text;
  }

  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

renderer.text = function (text) {
  return text;
};

// console.log(marked('> hahaha', { renderer: renderer }))
export default renderer;