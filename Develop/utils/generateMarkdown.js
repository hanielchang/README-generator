var MIT = 'The MIT License (MIT)\n' +

'Copyright (c) 2015 Chris Kibble\n' +

'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:' +

'The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.' +

'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.';


var Apache = 'The Apache Software Foundation uses various licenses to distribute software and documentation, and to accept regular contributions from individuals and corporations and larger grants of existing software products.' + 

'These licenses help us achieve our goal of providing reliable and long-lived software products through collaborative, open-source software development. In all cases, contributors retain full rights to use their original contributions for any other purpose outside of Apache while providing the ASF and its projects the right to distribute and build upon their work within Apache.';


var GNU = "People often ask us what license we recommend they use for their project. We've written about this publicly before, but the information has been scattered around between different essays, FAQ entries, and license commentaries. This article collects all that information into a single source, to make it easier for people to follow and refer back to." + 

"These recommendations are for works designed to do practical jobs. Those include software, documentation, and some other things. Works of art, and works that state a point of view, are different issues; the GNU Project has no general stand about how they should be released, except that they should all be usable without nonfree software (in particular, without DRM). However, you might want to follow these recommendations for art works that go with a particular program." + 

"The recommendations apply to licensing a work that you create—whether that's a modification of an existing work, or a new original work. They do not address the issue of combining existing material under different licenses. If you're looking for help with that, please check our GPL FAQ." + 

"After you see what we recommend here, if you'd like advice, you can write to <licensing@gnu.org>. Note that it will probably take a few weeks for the licensing team to get back to you; if you get no response in a month, please write again."

var OpenBSD = ''

var WordPress = ''

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return MIT;

    case 'Apache':
      return Apache;

    case 'GNU':
      return GNU;

    case 'OpenBSD':
      return OpenBSD;

    case 'WordPress':
      return WordPress;

    default:
      return '';
  }
}

module.exports = renderLicenseSection;
