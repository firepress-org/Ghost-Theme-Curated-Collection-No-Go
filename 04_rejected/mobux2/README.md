# Mobux v2

Mobux v2 theme based on the default casper theme
inspired my the original mobux theme. Supports syntax highlighting
featured by prismjs.com

## Configuration

*  Sidebar

Edit [partials/sidebar.hbs](https://github.com/ktklin/ghost-themes/blob/master/mobux2/partials/sidebar.hbs) and update the URLs accordingly

     <div class="social-icons">
                     <a href="<TO-BE-MODIFIED>"><span class="symbol">circletwitterbird</span></a>
                     <a href="<TO-BE-MODIFIED>"><span class="symbol">circlegoogleplus</span></a>
                     <a href="<TO-BE-MODIFIED>" alt="Github"><span class="symbol">circlegithubalt</span></a>
                     <a href="/rss"><span class="symbol">circlerss</span></a>
                     <a href="mailto:<TO-BE-MODIFIED>"><span
                     class="symbol">circleemail</span></a>
     </div>

*  Google Analytics

Edit [partials/analytics.hbs](https://github.com/ktklin/ghost-themes/blob/master/mobux2/partials/analytics.hbs) and set parameters to `ga('create', ...)` call.

	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', '<TO-BE-MODIFIED>', '<TO-BE-MODIFIED>');
		ga('send', 'pageview');
	</script>

*  Google Webmaster Tools

Edit [default.hbs](https://github.com/ktklin/ghost-themes/blob/master/mobux2/default.hbs) and set your `content` value with a tag named `google-site-verification`.

	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="google-site-verification" content="<TO-BE-MODIFIED>" />

	{{! Page Meta }}
	<title>{{meta_title}}</title>


## Copyright & License

Copyright (C) 2016 Kurt Klinner - Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
