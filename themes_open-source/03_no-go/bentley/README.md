# from
https://bitbucket.org/caffein8/bentley

# Bentley

Bentley is a minimal and responsive [Ghost](http://ghost.org) theme focusing on your content. With smooth and slick javascripts transitions, the experience is elegant and simple - just like the Ghost blogging platform. 

## Demo

See for yourself at [http://alson.caffein8.com](http://alson.caffein8.com).

Expect updates - this theme is maturing along with Ghost. Feel free to [add suggested features](https://bitbucket.org/Caffein8/bentley/issues/new).

## How to install

1. Navigate to your Ghost theme directory ghost/content/themes

2. Clone theme repo using below command ```git clone https://bitbucket.org/Caffein8/bentley.git```

3. Restart ghost and log into your dashboard

4. On settings page, select rollsroyce as theme and save.

5. To make custom changes, go to ```default.hbs``` and search for 'TODOs' to add things like twitter handle, google analytics ID, etc. This is a temporary fix to a problem in Ghost v0.4. 

*Note:* Ping me (alson[at]caffein8[dot]com) if you have any issues.

## User Guide

#### Cover Photo
To add a cover photo. Just add a title of `cover` to the image. e.g.

    ![cover](/content/images/2014/Jul/8367493679_f712198e6e_h.jpg)

#### Subtitles
To add a subtitle. Just add a `<span>` with the class of `subtitle`. e.g

    <span id="subtitle">Do they really exist, or are they unicorns?</span>

_P.S. If you do not want the subtitle to be picked up by the excerpt, simply add the subtitle at the end of the article. This way the excerpt will not pick it up._

## Releases

See the [changelog](CHANGELOG.md) for release details.

| Version | Release Date |
| :-----: | :----------: |
| 1.0 | 2014-07-26 |
| 0.2 | 2014-01-19 |
| 0.1.1 | 2014-01-05 |
| 0.1 | 2014-01-05 |

## Contributing and Forking

*Bentley* is open source and released under the MIT License, and contributions to the code base are welcome and encouraged. Find [more information about contributing here](CONTRIBUTING.md).

## Thanks

Thanks to [@roycehaynes](https://twitter.com/roycehaynes), the original porter of the theme to Ghost as well as the Ghost team for creating this blog platform. 

Special shout out to [Dave Gamache](http://blog.davegamache.com/articles), the original designer.

## Copyright & License

Copyright (c) 2014 [Caffein8 Creative LABS](http://caffein8.com) - Released under The MIT License.