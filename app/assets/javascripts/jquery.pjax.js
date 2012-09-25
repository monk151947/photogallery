  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jquery-pjax/jquery.pjax.js at master · defunkt/jquery-pjax · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.png" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="+1TwZ9vUXiWPvdWP+clprhmb2YrPXorq3RKY8wmCYr4=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-fc8f93aa673bcc847295986dc6d690ee822e90d0.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-327db63293098d6476136b438e34be409ae3b461.css" media="screen" rel="stylesheet" type="text/css" />
    


    <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-917510fd4e1e5f0487cfe32445a6cfc8927e84f1.js" type="text/javascript"></script>
    
    <script defer="defer" src="https://a248.e.akamai.net/assets.github.com/assets/github-bf18c28a497214adf5ccf6725575da23a83918fd.js" type="text/javascript"></script>
    
    

      <link rel='permalink' href='/defunkt/jquery-pjax/blob/857b1d5b344a41d26d6a10ed3f833c65ce509fe2/jquery.pjax.js'>
    <meta property="og:title" content="jquery-pjax"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/defunkt/jquery-pjax"/>
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-140.png?1338956357"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="pushState + ajax = pjax. Contribute to jquery-pjax development by creating an account on GitHub."/>

    <meta name="description" content="pushState + ajax = pjax. Contribute to jquery-pjax development by creating an account on GitHub." />

  <link href="https://github.com/defunkt/jquery-pjax/commits/master.atom" rel="alternate" title="Recent Commits to jquery-pjax:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob  vis-public env-production ">
    <div id="wrapper">

    
    

      <div id="header" class="true clearfix">
        <div class="container clearfix">
          <a class="site-logo" href="https://github.com/">
            <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1338956357" />
            <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1338956357" />
          </a>


                  <!--
      make sure to use fully qualified URLs here since this nav
      is used on error pages on other domains
    -->
    <ul class="top-nav logged_out">
        <li class="pricing"><a href="https://github.com/plans">Signup and Pricing</a></li>
        <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
      <li class="features"><a href="https://github.com/features">Features</a></li>
        <li class="blog"><a href="https://github.com/blog">Blog</a></li>
      <li class="login"><a href="https://github.com/login?return_to=%2Fdefunkt%2Fjquery-pjax%2Fblob%2Fmaster%2Fjquery.pjax.js">Sign in</a></li>
    </ul>



          
        </div>
      </div>

      

      

            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="container hentry">
        <div class="pagehead repohead instapaper_ignore readability-menu">
        <div class="title-actions-bar">
          



              <ul class="pagehead-actions">



          <li>
            <span class="star-button"><a href="/login?return_to=%2Fdefunkt%2Fjquery-pjax" class="minibutton btn-star js-toggler-target entice tooltipped leftwards" title="You must be signed in to use this feature" rel="nofollow">Star</a><a class="social-count js-social-count" href="/defunkt/jquery-pjax/stargazers">4,559</a></span>
          </li>
          <li>
            <a href="/login?return_to=%2Fdefunkt%2Fjquery-pjax" class="minibutton btn-fork js-toggler-target fork-button entice tooltipped leftwards"  title="You must be signed in to fork a repository" rel="nofollow">Fork</a><a href="/defunkt/jquery-pjax/network" class="social-count">268</a>
          </li>
    </ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
            <span class="repo-label"><span>public</span></span>
            <span class="mega-icon mega-icon-public-repo"></span>
            <span class="author vcard">
<a href="/defunkt" class="url fn" itemprop="url" rel="author">              <span itemprop="title">defunkt</span>
              </a></span> /
            <strong><a href="/defunkt/jquery-pjax" class="js-current-repository">jquery-pjax</a></strong>
          </h1>
        </div>

          

  <ul class="tabs">
    <li><a href="/defunkt/jquery-pjax" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/defunkt/jquery-pjax/network" highlight="repo_network">Network</a>
    <li><a href="/defunkt/jquery-pjax/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>6</span></a></li>

      <li><a href="/defunkt/jquery-pjax/issues" highlight="repo_issues">Issues <span class='counter'>20</span></a></li>


    <li><a href="/defunkt/jquery-pjax/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>


  </ul>
  
<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/defunkt/jquery-pjax/tree-list/857b1d5b344a41d26d6a10ed3f833c65ce509fe2"
      data-blob-url-prefix="/defunkt/jquery-pjax/blob/857b1d5b344a41d26d6a10ed3f833c65ce509fe2"
    >

  <div class="breadcrumb">
    <span class="bold"><a href="/defunkt/jquery-pjax">jquery-pjax</a></span> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/defunkt/jquery-pjax/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever" rel="nofollow">Dismiss</a>
        <span class="bold">Octotip:</span> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser" cellpadding="0" cellspacing="0">
    <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list js-navigation-container">
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form accept-charset="UTF-8">
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        Go
      </button>
    </div>
  </form>
</div>


<div class="subnav-bar">

  <ul class="actions subnav">
    <li><a href="/defunkt/jquery-pjax/tags" class="blank" highlight="repo_tags">Tags <span class="counter">0</span></a></li>
    <li><a href="/defunkt/jquery-pjax/downloads" class="blank downloads-blank" highlight="repo_downloads">Downloads <span class="counter">0</span></a></li>
    
  </ul>

  <ul class="scope">
    <li class="switcher">

      <div class="context-menu-container js-menu-container js-context-menu">
        <a href="#"
           class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
           data-hotkey="w"
           data-master-branch="master"
           data-ref="master">
           <span><i>branch:</i> master</span>
        </a>

        <div class="context-pane commitish-context js-menu-content">
          <a href="javascript:;" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
          <div class="context-title">Switch branches/tags</div>
          <div class="context-body pane-selector commitish-selector js-navigation-container">
            <div class="filterbar">
              <input type="text" id="context-commitish-filter-field" class="js-navigation-enable" placeholder="Filter branches/tags" data-filterable />

              <ul class="tabs">
                <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                <li><a href="#" data-filter="tags">Tags</a></li>
              </ul>
            </div>

            <div class="js-filter-tab js-filter-branches" data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
              <div class="no-results js-not-filterable">Nothing to show</div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/defunkt/jquery-pjax/blob/heroku/jquery.pjax.js" class="js-navigation-open" data-name="heroku" rel="nofollow">heroku</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target selected">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/defunkt/jquery-pjax/blob/master/jquery.pjax.js" class="js-navigation-open" data-name="master" rel="nofollow">master</a>
                  </h4>
                </div>
            </div>

            <div class="js-filter-tab js-filter-tags" style="display:none" data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
              <div class="no-results js-not-filterable">Nothing to show</div>
            </div>
          </div>
        </div><!-- /.commitish-context-context -->
      </div>

    </li>
  </ul>

  <ul class="subnav with-scope">

    <li><a href="/defunkt/jquery-pjax" class="selected" highlight="repo_source">Files</a></li>
    <li><a href="/defunkt/jquery-pjax/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/defunkt/jquery-pjax/branches" class="" highlight="repo_branches" rel="nofollow">Branches <span class="counter">2</span></a></li>
  </ul>

</div>

  
  
  


          

        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" data-pjax-container>
          




<!-- blob contrib key: blob_contributors:v21:bf838ab8d4b0e62f55c67075c88305db -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:bf838ab8d4b0e62f55c67075c88305db -->

<!-- block_view_fragment_key: views10/v8/blob:v21:93a587bea3f6c83989d9fb08f3c563b8 -->
  <div id="slider">

    <div class="breadcrumb" data-path="jquery.pjax.js/">
      <b itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/defunkt/jquery-pjax/tree/857b1d5b344a41d26d6a10ed3f833c65ce509fe2" class="js-rewrite-sha" itemprop="url"><span itemprop="title">jquery-pjax</span></a></b> / <strong class="final-path">jquery.pjax.js</strong> <span class="js-clippy mini-icon mini-icon-clippy " data-clipboard-text="jquery.pjax.js" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
    </div>

      
  <div class="commit file-history-tease js-blob-contributors-content" data-path="jquery.pjax.js/">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/bbe5dc8dcf248706525ab76f46185520?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
    <span class="author"><a href="/josh">josh</a></span>
    <time class="js-relative-date" datetime="2012-08-08T09:49:53-07:00" title="2012-08-08 09:49:53">August 08, 2012</time>
    <div class="commit-title">
        <a href="/defunkt/jquery-pjax/commit/857b1d5b344a41d26d6a10ed3f833c65ce509fe2" class="message">Use location.replace for fallback loading</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>21</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="hellp" href="/defunkt/jquery-pjax/commits/master/jquery.pjax.js?author=hellp"><img height="20" src="https://secure.gravatar.com/avatar/de1963fbed1a7d77e6d9a319ae406c1e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="brianmario" href="/defunkt/jquery-pjax/commits/master/jquery.pjax.js?author=brianmario"><img height="20" src="https://secure.gravatar.com/avatar/c9f60c0cb1d941fa8e93bbfcb907c27e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="rockymeza" href="/defunkt/jquery-pjax/commits/master/jquery.pjax.js?author=rockymeza"><img height="20" src="https://secure.gravatar.com/avatar/2eb6399115a962582e441abbd04c32dd?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="eval" href="/defunkt/jquery-pjax/commits/master/jquery.pjax.js?author=eval"><img height="20" src="https://secure.gravatar.com/avatar/07bd4274c42017bf1ec98de4fb7a0ea8?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="hazzik" href="/defunkt/jquery-pjax/commits/master/jquery.pjax.js?author=hazzik"><img height="20" src="https://secure.gravatar.com/avatar/849b5057cdc84934daae1942749f0270?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="freman" href="/defunkt/jquery-pjax/commits/master/jquery.pjax.js?author=freman"><img height="20" src="https://secure.gravatar.com/avatar/bf0ef2eb7d2c4a0a33b54904e1c51b0d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="holysugar" href="/defunkt/jquery-pjax/commits/master/jquery.pjax.js?author=holysugar"><img height="20" src="https://secure.gravatar.com/avatar/04dc2a413a165022953d16e33f57a348?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="gavinwahl" href="/defunkt/jquery-pjax/commits/master/jquery.pjax.js?author=gavinwahl"><img height="20" src="https://secure.gravatar.com/avatar/9c4cd276c08f9c97148ad90636def10c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="catshirt" href="/defunkt/jquery-pjax/commits/master/jquery.pjax.js?author=catshirt"><img height="20" src="https://secure.gravatar.com/avatar/a419a21a25e32f4debca19c8561ae568?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="morten" href="/defunkt/jquery-pjax/commits/master/jquery.pjax.js?author=morten"><img height="20" src="https://secure.gravatar.com/avatar/e710affea130d984c84a0db59fa996c0?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="defunkt" href="/defunkt/jquery-pjax/commits/master/jquery.pjax.js?author=defunkt"><img height="20" src="https://secure.gravatar.com/avatar/b8dbb1987e8e5318584865f880036796?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="halida" href="/defunkt/jquery-pjax/commits/master/jquery.pjax.js?author=halida"><img height="20" src="https://secure.gravatar.com/avatar/946dbc66d19ba815ffec20d05f138f73?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="littke" href="/defunkt/jquery-pjax/commits/master/jquery.pjax.js?author=littke"><img height="20" src="https://secure.gravatar.com/avatar/abdf998ccf33eabe7e237de882beb154?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="sstephenson" href="/defunkt/jquery-pjax/commits/master/jquery.pjax.js?author=sstephenson"><img height="20" src="https://secure.gravatar.com/avatar/5b9fe87ec1faa67a4599782930f45ec9?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="mislav" href="/defunkt/jquery-pjax/commits/master/jquery.pjax.js?author=mislav"><img height="20" src="https://secure.gravatar.com/avatar/8f93a872e399bc1353cc8d4e791d5401?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="sakuro" href="/defunkt/jquery-pjax/commits/master/jquery.pjax.js?author=sakuro"><img height="20" src="https://secure.gravatar.com/avatar/a1cbed8bf64473e2acdd0c7066cc5b29?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="spantaleev" href="/defunkt/jquery-pjax/commits/master/jquery.pjax.js?author=spantaleev"><img height="20" src="https://secure.gravatar.com/avatar/da5da7021799f9f1336e493601402493?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="anttimattila" href="/defunkt/jquery-pjax/commits/master/jquery.pjax.js?author=anttimattila"><img height="20" src="https://secure.gravatar.com/avatar/0815b51395cc50ec60d976bf2a5920ad?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="mono0x" href="/defunkt/jquery-pjax/commits/master/jquery.pjax.js?author=mono0x"><img height="20" src="https://secure.gravatar.com/avatar/a9fd512c226335b7ec7e5682ba76df64?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="siu" href="/defunkt/jquery-pjax/commits/master/jquery.pjax.js?author=siu"><img height="20" src="https://secure.gravatar.com/avatar/c3d73f7b8499381978f28af07677c6e0?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="josh" href="/defunkt/jquery-pjax/commits/master/jquery.pjax.js?author=josh"><img height="20" src="https://secure.gravatar.com/avatar/bbe5dc8dcf248706525ab76f46185520?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/de1963fbed1a7d77e6d9a319ae406c1e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/hellp">hellp</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/c9f60c0cb1d941fa8e93bbfcb907c27e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/brianmario">brianmario</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/2eb6399115a962582e441abbd04c32dd?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/rockymeza">rockymeza</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/07bd4274c42017bf1ec98de4fb7a0ea8?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/eval">eval</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/849b5057cdc84934daae1942749f0270?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/hazzik">hazzik</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/bf0ef2eb7d2c4a0a33b54904e1c51b0d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/freman">freman</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/04dc2a413a165022953d16e33f57a348?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/holysugar">holysugar</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/9c4cd276c08f9c97148ad90636def10c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/gavinwahl">gavinwahl</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/a419a21a25e32f4debca19c8561ae568?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/catshirt">catshirt</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/e710affea130d984c84a0db59fa996c0?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/morten">morten</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/b8dbb1987e8e5318584865f880036796?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/defunkt">defunkt</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/946dbc66d19ba815ffec20d05f138f73?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/halida">halida</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/abdf998ccf33eabe7e237de882beb154?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/littke">littke</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/5b9fe87ec1faa67a4599782930f45ec9?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/sstephenson">sstephenson</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/8f93a872e399bc1353cc8d4e791d5401?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/mislav">mislav</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/a1cbed8bf64473e2acdd0c7066cc5b29?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/sakuro">sakuro</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/da5da7021799f9f1336e493601402493?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/spantaleev">spantaleev</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/0815b51395cc50ec60d976bf2a5920ad?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/anttimattila">anttimattila</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/a9fd512c226335b7ec7e5682ba76df64?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/mono0x">mono0x</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/c3d73f7b8499381978f28af07677c6e0?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/siu">siu</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/bbe5dc8dcf248706525ab76f46185520?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/josh">josh</a>
        </li>
      </ul>
    </div>
  </div>


    <div class="frames">
      <div class="frame frame-center" data-path="jquery.pjax.js/" data-permalink-url="/defunkt/jquery-pjax/blob/857b1d5b344a41d26d6a10ed3f833c65ce509fe2/jquery.pjax.js" data-title="jquery-pjax/jquery.pjax.js at master · defunkt/jquery-pjax · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>716 lines (601 sloc)</span>
                <span>19.818 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                    <a class="grouped-button file-edit-link minibutton bigger lighter js-rewrite-sha" href="/defunkt/jquery-pjax/edit/857b1d5b344a41d26d6a10ed3f833c65ce509fe2/jquery.pjax.js" data-method="post" rel="nofollow" data-hotkey="e">Edit</a>
                  </li>
                <li>
                  <a href="/defunkt/jquery-pjax/raw/master/jquery.pjax.js" class="minibutton btn-raw grouped-button bigger lighter" id="raw-url">Raw</a>
                </li>
                  <li>
                    <a href="/defunkt/jquery-pjax/blame/master/jquery.pjax.js" class="minibutton btn-blame grouped-button bigger lighter">Blame</a>
                  </li>
                <li>
                  <a href="/defunkt/jquery-pjax/commits/master/jquery.pjax.js" class="minibutton btn-history grouped-button bigger lighter" rel="nofollow">History</a>
                </li>
              </ul>
            </div>
              <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="c1">// jquery.pjax.js</span></div><div class='line' id='LC2'><span class="c1">// copyright chris wanstrath</span></div><div class='line' id='LC3'><span class="c1">// https://github.com/defunkt/jquery-pjax</span></div><div class='line' id='LC4'><br/></div><div class='line' id='LC5'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">){</span></div><div class='line' id='LC6'><br/></div><div class='line' id='LC7'><span class="c1">// When called on a link, fetches the href with ajax into the</span></div><div class='line' id='LC8'><span class="c1">// container specified as the first parameter or with the data-pjax</span></div><div class='line' id='LC9'><span class="c1">// attribute on the link itself.</span></div><div class='line' id='LC10'><span class="c1">//</span></div><div class='line' id='LC11'><span class="c1">// Tries to make sure the back button and ctrl+click work the way</span></div><div class='line' id='LC12'><span class="c1">// you&#39;d expect.</span></div><div class='line' id='LC13'><span class="c1">//</span></div><div class='line' id='LC14'><span class="c1">// Accepts a jQuery ajax options object that may include these</span></div><div class='line' id='LC15'><span class="c1">// pjax specific options:</span></div><div class='line' id='LC16'><span class="c1">//</span></div><div class='line' id='LC17'><span class="c1">// container - Where to stick the response body. Usually a String selector.</span></div><div class='line' id='LC18'><span class="c1">//             $(container).html(xhr.responseBody)</span></div><div class='line' id='LC19'><span class="c1">//      push - Whether to pushState the URL. Defaults to true (of course).</span></div><div class='line' id='LC20'><span class="c1">//   replace - Want to use replaceState instead? That&#39;s cool.</span></div><div class='line' id='LC21'><span class="c1">//</span></div><div class='line' id='LC22'><span class="c1">// For convenience the first parameter can be either the container or</span></div><div class='line' id='LC23'><span class="c1">// the options object.</span></div><div class='line' id='LC24'><span class="c1">//</span></div><div class='line' id='LC25'><span class="c1">// Returns the jQuery object</span></div><div class='line' id='LC26'><span class="kd">function</span> <span class="nx">fnPjax</span><span class="p">(</span><span class="nx">container</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC27'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">live</span><span class="p">(</span><span class="s1">&#39;click.pjax&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">){</span></div><div class='line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">handleClick</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">container</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span></div><div class='line' id='LC29'>&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC30'><span class="p">}</span></div><div class='line' id='LC31'><br/></div><div class='line' id='LC32'><span class="c1">// Public: pjax on click handler</span></div><div class='line' id='LC33'><span class="c1">//</span></div><div class='line' id='LC34'><span class="c1">// Exported as $.pjax.click.</span></div><div class='line' id='LC35'><span class="c1">//</span></div><div class='line' id='LC36'><span class="c1">// event   - &quot;click&quot; jQuery.Event</span></div><div class='line' id='LC37'><span class="c1">// options - pjax options</span></div><div class='line' id='LC38'><span class="c1">//</span></div><div class='line' id='LC39'><span class="c1">// Examples</span></div><div class='line' id='LC40'><span class="c1">//</span></div><div class='line' id='LC41'><span class="c1">//   $(&#39;a&#39;).live(&#39;click&#39;, $.pjax.click)</span></div><div class='line' id='LC42'><span class="c1">//   // is the same as</span></div><div class='line' id='LC43'><span class="c1">//   $(&#39;a&#39;).pjax()</span></div><div class='line' id='LC44'><span class="c1">//</span></div><div class='line' id='LC45'><span class="c1">//  $(document).on(&#39;click&#39;, &#39;a&#39;, function(event) {</span></div><div class='line' id='LC46'><span class="c1">//    var container = $(this).closest(&#39;[data-pjax-container]&#39;)</span></div><div class='line' id='LC47'><span class="c1">//    return $.pjax.click(event, container)</span></div><div class='line' id='LC48'><span class="c1">//  })</span></div><div class='line' id='LC49'><span class="c1">//</span></div><div class='line' id='LC50'><span class="c1">// Returns false if pjax runs, otherwise nothing.</span></div><div class='line' id='LC51'><span class="kd">function</span> <span class="nx">handleClick</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">container</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC52'>&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">optionsFor</span><span class="p">(</span><span class="nx">container</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span></div><div class='line' id='LC53'><br/></div><div class='line' id='LC54'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">link</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">currentTarget</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">link</span><span class="p">.</span><span class="nx">tagName</span><span class="p">.</span><span class="nx">toUpperCase</span><span class="p">()</span> <span class="o">!==</span> <span class="s1">&#39;A&#39;</span><span class="p">)</span></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="s2">&quot;$.fn.pjax or $.pjax.click requires an anchor element&quot;</span></div><div class='line' id='LC58'><br/></div><div class='line' id='LC59'>&nbsp;&nbsp;<span class="c1">// Middle click, cmd click, and ctrl click should open</span></div><div class='line' id='LC60'>&nbsp;&nbsp;<span class="c1">// links in a new tab as normal.</span></div><div class='line' id='LC61'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">which</span> <span class="o">&gt;</span> <span class="mi">1</span> <span class="o">||</span> <span class="nx">event</span><span class="p">.</span><span class="nx">metaKey</span> <span class="o">||</span> <span class="nx">event</span><span class="p">.</span><span class="nx">ctrlKey</span> <span class="p">)</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span></div><div class='line' id='LC63'><br/></div><div class='line' id='LC64'>&nbsp;&nbsp;<span class="c1">// Ignore cross origin links</span></div><div class='line' id='LC65'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">location</span><span class="p">.</span><span class="nx">protocol</span> <span class="o">!==</span> <span class="nx">link</span><span class="p">.</span><span class="nx">protocol</span> <span class="o">||</span> <span class="nx">location</span><span class="p">.</span><span class="nx">host</span> <span class="o">!==</span> <span class="nx">link</span><span class="p">.</span><span class="nx">host</span> <span class="p">)</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span></div><div class='line' id='LC67'><br/></div><div class='line' id='LC68'>&nbsp;&nbsp;<span class="c1">// Ignore anchors on the same page</span></div><div class='line' id='LC69'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">link</span><span class="p">.</span><span class="nx">hash</span> <span class="o">&amp;&amp;</span> <span class="nx">link</span><span class="p">.</span><span class="nx">href</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">link</span><span class="p">.</span><span class="nx">hash</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="o">===</span></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">location</span><span class="p">.</span><span class="nx">href</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">location</span><span class="p">.</span><span class="nx">hash</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">))</span></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>&nbsp;&nbsp;<span class="c1">// Ignore empty anchor &quot;foo.html#&quot;</span></div><div class='line' id='LC74'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">link</span><span class="p">.</span><span class="nx">href</span> <span class="o">===</span> <span class="nx">location</span><span class="p">.</span><span class="nx">href</span> <span class="o">+</span> <span class="s1">&#39;#&#39;</span><span class="p">)</span></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span></div><div class='line' id='LC76'><br/></div><div class='line' id='LC77'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">defaults</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span><span class="o">:</span> <span class="nx">link</span><span class="p">.</span><span class="nx">href</span><span class="p">,</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">container</span><span class="o">:</span> <span class="nx">$</span><span class="p">(</span><span class="nx">link</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-pjax&#39;</span><span class="p">),</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">target</span><span class="o">:</span> <span class="nx">link</span><span class="p">,</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clickedElement</span><span class="o">:</span> <span class="nx">$</span><span class="p">(</span><span class="nx">link</span><span class="p">),</span> <span class="c1">// DEPRECATED: use target</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fragment</span><span class="o">:</span> <span class="kc">null</span></div><div class='line' id='LC83'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC84'><br/></div><div class='line' id='LC85'>&nbsp;&nbsp;<span class="nx">pjax</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">defaults</span><span class="p">,</span> <span class="nx">options</span><span class="p">))</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'>&nbsp;&nbsp;<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">()</span></div><div class='line' id='LC88'><span class="p">}</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'><span class="c1">// Loads a URL with ajax, puts the response body inside a container,</span></div><div class='line' id='LC91'><span class="c1">// then pushState()&#39;s the loaded URL.</span></div><div class='line' id='LC92'><span class="c1">//</span></div><div class='line' id='LC93'><span class="c1">// Works just like $.ajax in that it accepts a jQuery ajax</span></div><div class='line' id='LC94'><span class="c1">// settings object (with keys like url, type, data, etc).</span></div><div class='line' id='LC95'><span class="c1">//</span></div><div class='line' id='LC96'><span class="c1">// Accepts these extra keys:</span></div><div class='line' id='LC97'><span class="c1">//</span></div><div class='line' id='LC98'><span class="c1">// container - Where to stick the response body.</span></div><div class='line' id='LC99'><span class="c1">//             $(container).html(xhr.responseBody)</span></div><div class='line' id='LC100'><span class="c1">//      push - Whether to pushState the URL. Defaults to true (of course).</span></div><div class='line' id='LC101'><span class="c1">//   replace - Want to use replaceState instead? That&#39;s cool.</span></div><div class='line' id='LC102'><span class="c1">//</span></div><div class='line' id='LC103'><span class="c1">// Use it just like $.ajax:</span></div><div class='line' id='LC104'><span class="c1">//</span></div><div class='line' id='LC105'><span class="c1">//   var xhr = $.pjax({ url: this.href, container: &#39;#main&#39; })</span></div><div class='line' id='LC106'><span class="c1">//   console.log( xhr.readyState )</span></div><div class='line' id='LC107'><span class="c1">//</span></div><div class='line' id='LC108'><span class="c1">// Returns whatever $.ajax returns.</span></div><div class='line' id='LC109'><span class="kd">function</span> <span class="nx">pjax</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC110'>&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="kc">true</span><span class="p">,</span> <span class="p">{},</span> <span class="nx">$</span><span class="p">.</span><span class="nx">ajaxSettings</span><span class="p">,</span> <span class="nx">pjax</span><span class="p">.</span><span class="nx">defaults</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span></div><div class='line' id='LC111'><br/></div><div class='line' id='LC112'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">url</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">url</span><span class="p">()</span></div><div class='line' id='LC114'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC115'><br/></div><div class='line' id='LC116'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">target</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">target</span></div><div class='line' id='LC117'><br/></div><div class='line' id='LC118'>&nbsp;&nbsp;<span class="c1">// DEPRECATED: use options.target</span></div><div class='line' id='LC119'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">target</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">clickedElement</span><span class="p">)</span> <span class="nx">target</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">clickedElement</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span></div><div class='line' id='LC120'><br/></div><div class='line' id='LC121'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">hash</span> <span class="o">=</span> <span class="nx">parseURL</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">url</span><span class="p">).</span><span class="nx">hash</span></div><div class='line' id='LC122'><br/></div><div class='line' id='LC123'>&nbsp;&nbsp;<span class="c1">// DEPRECATED: Save references to original event callbacks. However,</span></div><div class='line' id='LC124'>&nbsp;&nbsp;<span class="c1">// listening for custom pjax:* events is prefered.</span></div><div class='line' id='LC125'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">oldBeforeSend</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">beforeSend</span><span class="p">,</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">oldComplete</span>   <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">complete</span><span class="p">,</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">oldSuccess</span>    <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">,</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">oldError</span>      <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">error</span></div><div class='line' id='LC129'><br/></div><div class='line' id='LC130'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">context</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">context</span> <span class="o">=</span> <span class="nx">findContainerFor</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">container</span><span class="p">)</span></div><div class='line' id='LC131'><br/></div><div class='line' id='LC132'>&nbsp;&nbsp;<span class="c1">// We want the browser to maintain two separate internal caches: one</span></div><div class='line' id='LC133'>&nbsp;&nbsp;<span class="c1">// for pjax&#39;d partial page loads and one for normal page loads.</span></div><div class='line' id='LC134'>&nbsp;&nbsp;<span class="c1">// Without adding this secret parameter, some browsers will often</span></div><div class='line' id='LC135'>&nbsp;&nbsp;<span class="c1">// confuse the two.</span></div><div class='line' id='LC136'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">data</span><span class="p">)</span> <span class="nx">options</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="p">{}</span></div><div class='line' id='LC137'>&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">_pjax</span> <span class="o">=</span> <span class="nx">context</span><span class="p">.</span><span class="nx">selector</span></div><div class='line' id='LC138'><br/></div><div class='line' id='LC139'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">fire</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">args</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">event</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">Event</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="p">{</span> <span class="nx">relatedTarget</span><span class="o">:</span> <span class="nx">target</span> <span class="p">})</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">context</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">args</span><span class="p">)</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">!</span><span class="nx">event</span><span class="p">.</span><span class="nx">isDefaultPrevented</span><span class="p">()</span></div><div class='line' id='LC143'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC144'><br/></div><div class='line' id='LC145'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">timeoutTimer</span></div><div class='line' id='LC146'><br/></div><div class='line' id='LC147'>&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">beforeSend</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">xhr</span><span class="p">,</span> <span class="nx">settings</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// No timeout for non-GET requests</span></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Its not safe to request the resource again with a fallback method.</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">type</span> <span class="o">!==</span> <span class="s1">&#39;GET&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">settings</span><span class="p">.</span><span class="nx">timeout</span> <span class="o">=</span> <span class="mi">0</span></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC153'><br/></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">timeout</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeoutTimer</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;pjax:timeout&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">xhr</span><span class="p">,</span> <span class="nx">options</span><span class="p">]))</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">xhr</span><span class="p">.</span><span class="nx">abort</span><span class="p">(</span><span class="s1">&#39;timeout&#39;</span><span class="p">)</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">timeout</span><span class="p">)</span></div><div class='line' id='LC159'><br/></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Clear timeout setting so jquerys internal timeout isn&#39;t invoked</span></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">settings</span><span class="p">.</span><span class="nx">timeout</span> <span class="o">=</span> <span class="mi">0</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC163'><br/></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">xhr</span><span class="p">.</span><span class="nx">setRequestHeader</span><span class="p">(</span><span class="s1">&#39;X-PJAX&#39;</span><span class="p">,</span> <span class="s1">&#39;true&#39;</span><span class="p">)</span></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">xhr</span><span class="p">.</span><span class="nx">setRequestHeader</span><span class="p">(</span><span class="s1">&#39;X-PJAX-Container&#39;</span><span class="p">,</span> <span class="nx">context</span><span class="p">.</span><span class="nx">selector</span><span class="p">)</span></div><div class='line' id='LC166'><br/></div><div class='line' id='LC167'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span></div><div class='line' id='LC168'><br/></div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// DEPRECATED: Invoke original `beforeSend` handler</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">oldBeforeSend</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="nx">oldBeforeSend</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">result</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="k">return</span> <span class="kc">false</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC174'><br/></div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;pjax:beforeSend&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">xhr</span><span class="p">,</span> <span class="nx">settings</span><span class="p">]))</span></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span></div><div class='line' id='LC177'><br/></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">requestUrl</span> <span class="o">=</span> <span class="nx">parseURL</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">url</span><span class="p">).</span><span class="nx">href</span></div><div class='line' id='LC179'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC180'><br/></div><div class='line' id='LC181'>&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">complete</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">xhr</span><span class="p">,</span> <span class="nx">textStatus</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">timeoutTimer</span><span class="p">)</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">timeoutTimer</span><span class="p">)</span></div><div class='line' id='LC184'><br/></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// DEPRECATED: Invoke original `complete` handler</span></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">oldComplete</span><span class="p">)</span> <span class="nx">oldComplete</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC187'><br/></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;pjax:complete&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">xhr</span><span class="p">,</span> <span class="nx">textStatus</span><span class="p">,</span> <span class="nx">options</span><span class="p">])</span></div><div class='line' id='LC189'><br/></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;pjax:end&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">xhr</span><span class="p">,</span> <span class="nx">options</span><span class="p">])</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// end.pjax is deprecated</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;end.pjax&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">xhr</span><span class="p">,</span> <span class="nx">options</span><span class="p">])</span></div><div class='line' id='LC193'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC194'><br/></div><div class='line' id='LC195'>&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">error</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">xhr</span><span class="p">,</span> <span class="nx">textStatus</span><span class="p">,</span> <span class="nx">errorThrown</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">container</span> <span class="o">=</span> <span class="nx">extractContainer</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">,</span> <span class="nx">xhr</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span></div><div class='line' id='LC197'><br/></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// DEPRECATED: Invoke original `error` handler</span></div><div class='line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">oldError</span><span class="p">)</span> <span class="nx">oldError</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC200'><br/></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">allowed</span> <span class="o">=</span> <span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;pjax:error&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">xhr</span><span class="p">,</span> <span class="nx">textStatus</span><span class="p">,</span> <span class="nx">errorThrown</span><span class="p">,</span> <span class="nx">options</span><span class="p">])</span></div><div class='line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">textStatus</span> <span class="o">!==</span> <span class="s1">&#39;abort&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">allowed</span><span class="p">)</span></div><div class='line' id='LC203'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">container</span><span class="p">.</span><span class="nx">url</span><span class="p">)</span></div><div class='line' id='LC204'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC205'><br/></div><div class='line' id='LC206'>&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">success</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">status</span><span class="p">,</span> <span class="nx">xhr</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">container</span> <span class="o">=</span> <span class="nx">extractContainer</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">xhr</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span></div><div class='line' id='LC208'><br/></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">container</span><span class="p">.</span><span class="nx">contents</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">container</span><span class="p">.</span><span class="nx">url</span><span class="p">)</span></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span></div><div class='line' id='LC212'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC213'><br/></div><div class='line' id='LC214'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pjax</span><span class="p">.</span><span class="nx">state</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC215'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">id</span><span class="o">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">id</span> <span class="o">||</span> <span class="nx">uniqueId</span><span class="p">(),</span></div><div class='line' id='LC216'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span><span class="o">:</span> <span class="nx">container</span><span class="p">.</span><span class="nx">url</span><span class="p">,</span></div><div class='line' id='LC217'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">title</span><span class="o">:</span> <span class="nx">container</span><span class="p">.</span><span class="nx">title</span><span class="p">,</span></div><div class='line' id='LC218'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">container</span><span class="o">:</span> <span class="nx">context</span><span class="p">.</span><span class="nx">selector</span><span class="p">,</span></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fragment</span><span class="o">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">fragment</span><span class="p">,</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout</span><span class="o">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">timeout</span></div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC222'><br/></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">push</span> <span class="o">||</span> <span class="nx">options</span><span class="p">.</span><span class="nx">replace</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">history</span><span class="p">.</span><span class="nx">replaceState</span><span class="p">(</span><span class="nx">pjax</span><span class="p">.</span><span class="nx">state</span><span class="p">,</span> <span class="nx">container</span><span class="p">.</span><span class="nx">title</span><span class="p">,</span> <span class="nx">container</span><span class="p">.</span><span class="nx">url</span><span class="p">)</span></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC226'><br/></div><div class='line' id='LC227'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">container</span><span class="p">.</span><span class="nx">title</span><span class="p">)</span> <span class="nb">document</span><span class="p">.</span><span class="nx">title</span> <span class="o">=</span> <span class="nx">container</span><span class="p">.</span><span class="nx">title</span></div><div class='line' id='LC228'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">context</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="nx">container</span><span class="p">.</span><span class="nx">contents</span><span class="p">)</span></div><div class='line' id='LC229'><br/></div><div class='line' id='LC230'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Scroll to top by default</span></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">options</span><span class="p">.</span><span class="nx">scrollTo</span> <span class="o">===</span> <span class="s1">&#39;number&#39;</span><span class="p">)</span></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">scrollTop</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">scrollTo</span><span class="p">)</span></div><div class='line' id='LC233'><br/></div><div class='line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Google Analytics support</span></div><div class='line' id='LC235'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">replace</span> <span class="o">||</span> <span class="nx">options</span><span class="p">.</span><span class="nx">push</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nb">window</span><span class="p">.</span><span class="nx">_gaq</span> <span class="p">)</span></div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_gaq</span><span class="p">.</span><span class="nx">push</span><span class="p">([</span><span class="s1">&#39;_trackPageview&#39;</span><span class="p">])</span></div><div class='line' id='LC237'><br/></div><div class='line' id='LC238'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If the URL has a hash in it, make sure the browser</span></div><div class='line' id='LC239'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// knows to navigate to the hash.</span></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">hash</span> <span class="o">!==</span> <span class="s1">&#39;&#39;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Avoid using simple hash set here. Will add another history</span></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// entry. Replace the url with replaceState and scroll to target</span></div><div class='line' id='LC243'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// by hand.</span></div><div class='line' id='LC244'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line' id='LC245'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   window.location.hash = hash</span></div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span> <span class="nx">parseURL</span><span class="p">(</span><span class="nx">container</span><span class="p">.</span><span class="nx">url</span><span class="p">)</span></div><div class='line' id='LC247'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span><span class="p">.</span><span class="nx">hash</span> <span class="o">=</span> <span class="nx">hash</span></div><div class='line' id='LC248'><br/></div><div class='line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pjax</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">href</span></div><div class='line' id='LC250'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">history</span><span class="p">.</span><span class="nx">replaceState</span><span class="p">(</span><span class="nx">pjax</span><span class="p">.</span><span class="nx">state</span><span class="p">,</span> <span class="nx">container</span><span class="p">.</span><span class="nx">title</span><span class="p">,</span> <span class="nx">url</span><span class="p">.</span><span class="nx">href</span><span class="p">)</span></div><div class='line' id='LC251'><br/></div><div class='line' id='LC252'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">target</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">url</span><span class="p">.</span><span class="nx">hash</span><span class="p">)</span></div><div class='line' id='LC253'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">target</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">scrollTop</span><span class="p">(</span><span class="nx">target</span><span class="p">.</span><span class="nx">offset</span><span class="p">().</span><span class="nx">top</span><span class="p">)</span></div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC255'><br/></div><div class='line' id='LC256'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// DEPRECATED: Invoke original `success` handler</span></div><div class='line' id='LC257'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">oldSuccess</span><span class="p">)</span> <span class="nx">oldSuccess</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC258'><br/></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;pjax:success&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">data</span><span class="p">,</span> <span class="nx">status</span><span class="p">,</span> <span class="nx">xhr</span><span class="p">,</span> <span class="nx">options</span><span class="p">])</span></div><div class='line' id='LC260'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC261'><br/></div><div class='line' id='LC262'><br/></div><div class='line' id='LC263'>&nbsp;&nbsp;<span class="c1">// Initialize pjax.state for the initial page load. Assume we&#39;re</span></div><div class='line' id='LC264'>&nbsp;&nbsp;<span class="c1">// using the container and options of the link we&#39;re loading for the</span></div><div class='line' id='LC265'>&nbsp;&nbsp;<span class="c1">// back button to the initial page. This ensures good back button</span></div><div class='line' id='LC266'>&nbsp;&nbsp;<span class="c1">// behavior.</span></div><div class='line' id='LC267'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">pjax</span><span class="p">.</span><span class="nx">state</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC268'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pjax</span><span class="p">.</span><span class="nx">state</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">id</span><span class="o">:</span> <span class="nx">uniqueId</span><span class="p">(),</span></div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span><span class="o">:</span> <span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">href</span><span class="p">,</span></div><div class='line' id='LC271'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">title</span><span class="o">:</span> <span class="nb">document</span><span class="p">.</span><span class="nx">title</span><span class="p">,</span></div><div class='line' id='LC272'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">container</span><span class="o">:</span> <span class="nx">context</span><span class="p">.</span><span class="nx">selector</span><span class="p">,</span></div><div class='line' id='LC273'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fragment</span><span class="o">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">fragment</span><span class="p">,</span></div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout</span><span class="o">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">timeout</span></div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC276'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">history</span><span class="p">.</span><span class="nx">replaceState</span><span class="p">(</span><span class="nx">pjax</span><span class="p">.</span><span class="nx">state</span><span class="p">,</span> <span class="nb">document</span><span class="p">.</span><span class="nx">title</span><span class="p">)</span></div><div class='line' id='LC277'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC278'><br/></div><div class='line' id='LC279'>&nbsp;&nbsp;<span class="c1">// Cancel the current request if we&#39;re already pjaxing</span></div><div class='line' id='LC280'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">xhr</span> <span class="o">=</span> <span class="nx">pjax</span><span class="p">.</span><span class="nx">xhr</span></div><div class='line' id='LC281'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">xhr</span> <span class="o">&amp;&amp;</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">&lt;</span> <span class="mi">4</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC282'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">xhr</span><span class="p">.</span><span class="nx">onreadystatechange</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">noop</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">xhr</span><span class="p">.</span><span class="nx">abort</span><span class="p">()</span></div><div class='line' id='LC284'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC285'><br/></div><div class='line' id='LC286'>&nbsp;&nbsp;<span class="nx">pjax</span><span class="p">.</span><span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span></div><div class='line' id='LC287'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">xhr</span> <span class="o">=</span> <span class="nx">pjax</span><span class="p">.</span><span class="nx">xhr</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">ajax</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span></div><div class='line' id='LC288'><br/></div><div class='line' id='LC289'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC290'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// pjax event is deprecated</span></div><div class='line' id='LC291'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;pjax&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">xhr</span><span class="p">,</span> <span class="nx">options</span><span class="p">])</span></div><div class='line' id='LC292'><br/></div><div class='line' id='LC293'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">push</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">replace</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC294'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Cache current container element before replacing it</span></div><div class='line' id='LC295'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cachePush</span><span class="p">(</span><span class="nx">pjax</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">id</span><span class="p">,</span> <span class="nx">context</span><span class="p">.</span><span class="nx">clone</span><span class="p">().</span><span class="nx">contents</span><span class="p">())</span></div><div class='line' id='LC296'><br/></div><div class='line' id='LC297'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">history</span><span class="p">.</span><span class="nx">pushState</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">,</span> <span class="nx">options</span><span class="p">.</span><span class="nx">url</span><span class="p">)</span></div><div class='line' id='LC298'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC299'><br/></div><div class='line' id='LC300'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;pjax:start&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">xhr</span><span class="p">,</span> <span class="nx">options</span><span class="p">])</span></div><div class='line' id='LC301'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// start.pjax is deprecated</span></div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;start.pjax&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">xhr</span><span class="p">,</span> <span class="nx">options</span><span class="p">])</span></div><div class='line' id='LC303'><br/></div><div class='line' id='LC304'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;pjax:send&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">xhr</span><span class="p">,</span> <span class="nx">options</span><span class="p">])</span></div><div class='line' id='LC305'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC306'><br/></div><div class='line' id='LC307'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">pjax</span><span class="p">.</span><span class="nx">xhr</span></div><div class='line' id='LC308'><span class="p">}</span></div><div class='line' id='LC309'><br/></div><div class='line' id='LC310'><span class="c1">// Public: Reload current page with pjax.</span></div><div class='line' id='LC311'><span class="c1">//</span></div><div class='line' id='LC312'><span class="c1">// Returns whatever $.pjax returns.</span></div><div class='line' id='LC313'><span class="kd">function</span> <span class="nx">pjaxReload</span><span class="p">(</span><span class="nx">container</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC314'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">defaults</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC315'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span><span class="o">:</span> <span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">href</span><span class="p">,</span></div><div class='line' id='LC316'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">push</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC318'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scrollTo</span><span class="o">:</span> <span class="kc">false</span></div><div class='line' id='LC319'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC320'><br/></div><div class='line' id='LC321'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">pjax</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">defaults</span><span class="p">,</span> <span class="nx">optionsFor</span><span class="p">(</span><span class="nx">container</span><span class="p">,</span> <span class="nx">options</span><span class="p">)))</span></div><div class='line' id='LC322'><span class="p">}</span></div><div class='line' id='LC323'><br/></div><div class='line' id='LC324'><span class="c1">// popstate handler takes care of the back and forward buttons</span></div><div class='line' id='LC325'><span class="c1">//</span></div><div class='line' id='LC326'><span class="c1">// You probably shouldn&#39;t use pjax on pages with other pushState</span></div><div class='line' id='LC327'><span class="c1">// stuff yet.</span></div><div class='line' id='LC328'><span class="kd">function</span> <span class="nx">onPjaxPopstate</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC329'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">state</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">state</span></div><div class='line' id='LC330'><br/></div><div class='line' id='LC331'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">state</span> <span class="o">&amp;&amp;</span> <span class="nx">state</span><span class="p">.</span><span class="nx">container</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC332'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">container</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">state</span><span class="p">.</span><span class="nx">container</span><span class="p">)</span></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">container</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">contents</span> <span class="o">=</span> <span class="nx">cacheMapping</span><span class="p">[</span><span class="nx">state</span><span class="p">.</span><span class="nx">id</span><span class="p">]</span></div><div class='line' id='LC335'><br/></div><div class='line' id='LC336'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">pjax</span><span class="p">.</span><span class="nx">state</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Since state ids always increase, we can deduce the history</span></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// direction from the previous state.</span></div><div class='line' id='LC339'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">direction</span> <span class="o">=</span> <span class="nx">pjax</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">id</span> <span class="o">&lt;</span> <span class="nx">state</span><span class="p">.</span><span class="nx">id</span> <span class="o">?</span> <span class="s1">&#39;forward&#39;</span> <span class="o">:</span> <span class="s1">&#39;back&#39;</span></div><div class='line' id='LC340'><br/></div><div class='line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Cache current container before replacement and inform the</span></div><div class='line' id='LC342'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// cache which direction the history shifted.</span></div><div class='line' id='LC343'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cachePop</span><span class="p">(</span><span class="nx">direction</span><span class="p">,</span> <span class="nx">pjax</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">id</span><span class="p">,</span> <span class="nx">container</span><span class="p">.</span><span class="nx">clone</span><span class="p">().</span><span class="nx">contents</span><span class="p">())</span></div><div class='line' id='LC344'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC345'><br/></div><div class='line' id='LC346'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">popstateEvent</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">Event</span><span class="p">(</span><span class="s1">&#39;pjax:popstate&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC347'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">state</span><span class="o">:</span> <span class="nx">state</span><span class="p">,</span></div><div class='line' id='LC348'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">direction</span><span class="o">:</span> <span class="nx">direction</span></div><div class='line' id='LC349'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC350'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">container</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="nx">popstateEvent</span><span class="p">)</span></div><div class='line' id='LC351'><br/></div><div class='line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">options</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">id</span><span class="o">:</span> <span class="nx">state</span><span class="p">.</span><span class="nx">id</span><span class="p">,</span></div><div class='line' id='LC354'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span><span class="o">:</span> <span class="nx">state</span><span class="p">.</span><span class="nx">url</span><span class="p">,</span></div><div class='line' id='LC355'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">container</span><span class="o">:</span> <span class="nx">container</span><span class="p">,</span></div><div class='line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">push</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC357'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fragment</span><span class="o">:</span> <span class="nx">state</span><span class="p">.</span><span class="nx">fragment</span><span class="p">,</span></div><div class='line' id='LC358'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout</span><span class="o">:</span> <span class="nx">state</span><span class="p">.</span><span class="nx">timeout</span><span class="p">,</span></div><div class='line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scrollTo</span><span class="o">:</span> <span class="kc">false</span></div><div class='line' id='LC360'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC361'><br/></div><div class='line' id='LC362'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">contents</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// pjax event is deprecated</span></div><div class='line' id='LC364'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;pjax&#39;</span><span class="p">,</span> <span class="p">[</span><span class="kc">null</span><span class="p">,</span> <span class="nx">options</span><span class="p">])</span></div><div class='line' id='LC365'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">container</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;pjax:start&#39;</span><span class="p">,</span> <span class="p">[</span><span class="kc">null</span><span class="p">,</span> <span class="nx">options</span><span class="p">])</span></div><div class='line' id='LC366'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// end.pjax event is deprecated</span></div><div class='line' id='LC367'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">container</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;start.pjax&#39;</span><span class="p">,</span> <span class="p">[</span><span class="kc">null</span><span class="p">,</span> <span class="nx">options</span><span class="p">])</span></div><div class='line' id='LC368'><br/></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">state</span><span class="p">.</span><span class="nx">title</span><span class="p">)</span> <span class="nb">document</span><span class="p">.</span><span class="nx">title</span> <span class="o">=</span> <span class="nx">state</span><span class="p">.</span><span class="nx">title</span></div><div class='line' id='LC370'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">container</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="nx">contents</span><span class="p">)</span></div><div class='line' id='LC371'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pjax</span><span class="p">.</span><span class="nx">state</span> <span class="o">=</span> <span class="nx">state</span></div><div class='line' id='LC372'><br/></div><div class='line' id='LC373'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">container</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;pjax:end&#39;</span><span class="p">,</span> <span class="p">[</span><span class="kc">null</span><span class="p">,</span> <span class="nx">options</span><span class="p">])</span></div><div class='line' id='LC374'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// end.pjax event is deprecated</span></div><div class='line' id='LC375'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">container</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;end.pjax&#39;</span><span class="p">,</span> <span class="p">[</span><span class="kc">null</span><span class="p">,</span> <span class="nx">options</span><span class="p">])</span></div><div class='line' id='LC376'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC377'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pjax</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span></div><div class='line' id='LC378'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC379'><br/></div><div class='line' id='LC380'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Force reflow/relayout before the browser tries to restore the</span></div><div class='line' id='LC381'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// scroll position.</span></div><div class='line' id='LC382'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">container</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">offsetHeight</span></div><div class='line' id='LC383'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC384'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">location</span><span class="p">.</span><span class="nx">href</span><span class="p">)</span></div><div class='line' id='LC385'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC386'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC387'><span class="p">}</span></div><div class='line' id='LC388'><br/></div><div class='line' id='LC389'><span class="c1">// Fallback version of main pjax function for browsers that don&#39;t</span></div><div class='line' id='LC390'><span class="c1">// support pushState.</span></div><div class='line' id='LC391'><span class="c1">//</span></div><div class='line' id='LC392'><span class="c1">// Returns nothing since it retriggers a hard form submission.</span></div><div class='line' id='LC393'><span class="kd">function</span> <span class="nx">fallbackPjax</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC394'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">url</span><span class="p">)</span> <span class="o">?</span> <span class="nx">options</span><span class="p">.</span><span class="nx">url</span><span class="p">()</span> <span class="o">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">url</span><span class="p">,</span></div><div class='line' id='LC395'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">method</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">type</span> <span class="o">?</span> <span class="nx">options</span><span class="p">.</span><span class="nx">type</span><span class="p">.</span><span class="nx">toUpperCase</span><span class="p">()</span> <span class="o">:</span> <span class="s1">&#39;GET&#39;</span></div><div class='line' id='LC396'><br/></div><div class='line' id='LC397'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">form</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;form&gt;&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC398'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">method</span><span class="o">:</span> <span class="nx">method</span> <span class="o">===</span> <span class="s1">&#39;GET&#39;</span> <span class="o">?</span> <span class="s1">&#39;GET&#39;</span> <span class="o">:</span> <span class="s1">&#39;POST&#39;</span><span class="p">,</span></div><div class='line' id='LC399'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">action</span><span class="o">:</span> <span class="nx">url</span><span class="p">,</span></div><div class='line' id='LC400'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">style</span><span class="o">:</span> <span class="s1">&#39;display:none&#39;</span></div><div class='line' id='LC401'>&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC402'><br/></div><div class='line' id='LC403'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">method</span> <span class="o">!==</span> <span class="s1">&#39;GET&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">method</span> <span class="o">!==</span> <span class="s1">&#39;POST&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC404'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">form</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;input&gt;&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC405'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;hidden&#39;</span><span class="p">,</span></div><div class='line' id='LC406'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">name</span><span class="o">:</span> <span class="s1">&#39;_method&#39;</span><span class="p">,</span></div><div class='line' id='LC407'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="o">:</span> <span class="nx">method</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span></div><div class='line' id='LC408'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}))</span></div><div class='line' id='LC409'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC410'><br/></div><div class='line' id='LC411'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">data</span></div><div class='line' id='LC412'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">data</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC413'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;&amp;&#39;</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">index</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC414'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">pair</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;=&#39;</span><span class="p">)</span></div><div class='line' id='LC415'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">form</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;input&gt;&#39;</span><span class="p">,</span> <span class="p">{</span><span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;hidden&#39;</span><span class="p">,</span> <span class="nx">name</span><span class="o">:</span> <span class="nx">pair</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">value</span><span class="o">:</span> <span class="nx">pair</span><span class="p">[</span><span class="mi">1</span><span class="p">]}))</span></div><div class='line' id='LC416'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC417'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">data</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC418'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">key</span> <span class="k">in</span> <span class="nx">data</span><span class="p">)</span></div><div class='line' id='LC419'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">form</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;input&gt;&#39;</span><span class="p">,</span> <span class="p">{</span><span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;hidden&#39;</span><span class="p">,</span> <span class="nx">name</span><span class="o">:</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="nx">data</span><span class="p">[</span><span class="nx">key</span><span class="p">]}))</span></div><div class='line' id='LC420'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC421'><br/></div><div class='line' id='LC422'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="nx">form</span><span class="p">)</span></div><div class='line' id='LC423'>&nbsp;&nbsp;<span class="nx">form</span><span class="p">.</span><span class="nx">submit</span><span class="p">()</span></div><div class='line' id='LC424'><span class="p">}</span></div><div class='line' id='LC425'><br/></div><div class='line' id='LC426'><span class="c1">// Internal: Generate unique id for state object.</span></div><div class='line' id='LC427'><span class="c1">//</span></div><div class='line' id='LC428'><span class="c1">// Use a timestamp instead of a counter since ids should still be</span></div><div class='line' id='LC429'><span class="c1">// unique across page loads.</span></div><div class='line' id='LC430'><span class="c1">//</span></div><div class='line' id='LC431'><span class="c1">// Returns Number.</span></div><div class='line' id='LC432'><span class="kd">function</span> <span class="nx">uniqueId</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC433'>&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">).</span><span class="nx">getTime</span><span class="p">()</span></div><div class='line' id='LC434'><span class="p">}</span></div><div class='line' id='LC435'><br/></div><div class='line' id='LC436'><span class="c1">// Internal: Strips _pjax param from url</span></div><div class='line' id='LC437'><span class="c1">//</span></div><div class='line' id='LC438'><span class="c1">// url - String</span></div><div class='line' id='LC439'><span class="c1">//</span></div><div class='line' id='LC440'><span class="c1">// Returns String.</span></div><div class='line' id='LC441'><span class="kd">function</span> <span class="nx">stripPjaxParam</span><span class="p">(</span><span class="nx">url</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC442'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">url</span></div><div class='line' id='LC443'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\?_pjax=[^&amp;]+&amp;?/</span><span class="p">,</span> <span class="s1">&#39;?&#39;</span><span class="p">)</span></div><div class='line' id='LC444'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/_pjax=[^&amp;]+&amp;?/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)</span></div><div class='line' id='LC445'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[\?&amp;]$/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)</span></div><div class='line' id='LC446'><span class="p">}</span></div><div class='line' id='LC447'><br/></div><div class='line' id='LC448'><span class="c1">// Internal: Parse URL components and returns a Locationish object.</span></div><div class='line' id='LC449'><span class="c1">//</span></div><div class='line' id='LC450'><span class="c1">// url - String URL</span></div><div class='line' id='LC451'><span class="c1">//</span></div><div class='line' id='LC452'><span class="c1">// Returns HTMLAnchorElement that acts like Location.</span></div><div class='line' id='LC453'><span class="kd">function</span> <span class="nx">parseURL</span><span class="p">(</span><span class="nx">url</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC454'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;a&#39;</span><span class="p">)</span></div><div class='line' id='LC455'>&nbsp;&nbsp;<span class="nx">a</span><span class="p">.</span><span class="nx">href</span> <span class="o">=</span> <span class="nx">url</span></div><div class='line' id='LC456'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">a</span></div><div class='line' id='LC457'><span class="p">}</span></div><div class='line' id='LC458'><br/></div><div class='line' id='LC459'><span class="c1">// Internal: Build options Object for arguments.</span></div><div class='line' id='LC460'><span class="c1">//</span></div><div class='line' id='LC461'><span class="c1">// For convenience the first parameter can be either the container or</span></div><div class='line' id='LC462'><span class="c1">// the options object.</span></div><div class='line' id='LC463'><span class="c1">//</span></div><div class='line' id='LC464'><span class="c1">// Examples</span></div><div class='line' id='LC465'><span class="c1">//</span></div><div class='line' id='LC466'><span class="c1">//   optionsFor(&#39;#container&#39;)</span></div><div class='line' id='LC467'><span class="c1">//   // =&gt; {container: &#39;#container&#39;}</span></div><div class='line' id='LC468'><span class="c1">//</span></div><div class='line' id='LC469'><span class="c1">//   optionsFor(&#39;#container&#39;, {push: true})</span></div><div class='line' id='LC470'><span class="c1">//   // =&gt; {container: &#39;#container&#39;, push: true}</span></div><div class='line' id='LC471'><span class="c1">//</span></div><div class='line' id='LC472'><span class="c1">//   optionsFor({container: &#39;#container&#39;, push: true})</span></div><div class='line' id='LC473'><span class="c1">//   // =&gt; {container: &#39;#container&#39;, push: true}</span></div><div class='line' id='LC474'><span class="c1">//</span></div><div class='line' id='LC475'><span class="c1">// Returns options Object.</span></div><div class='line' id='LC476'><span class="kd">function</span> <span class="nx">optionsFor</span><span class="p">(</span><span class="nx">container</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC477'>&nbsp;&nbsp;<span class="c1">// Both container and options</span></div><div class='line' id='LC478'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">container</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span> <span class="p">)</span></div><div class='line' id='LC479'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">container</span> <span class="o">=</span> <span class="nx">container</span></div><div class='line' id='LC480'><br/></div><div class='line' id='LC481'>&nbsp;&nbsp;<span class="c1">// First argument is options Object</span></div><div class='line' id='LC482'>&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">$</span><span class="p">.</span><span class="nx">isPlainObject</span><span class="p">(</span><span class="nx">container</span><span class="p">)</span> <span class="p">)</span></div><div class='line' id='LC483'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">container</span></div><div class='line' id='LC484'><br/></div><div class='line' id='LC485'>&nbsp;&nbsp;<span class="c1">// Only container</span></div><div class='line' id='LC486'>&nbsp;&nbsp;<span class="k">else</span></div><div class='line' id='LC487'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="p">{</span><span class="nx">container</span><span class="o">:</span> <span class="nx">container</span><span class="p">}</span></div><div class='line' id='LC488'><br/></div><div class='line' id='LC489'>&nbsp;&nbsp;<span class="c1">// Find and validate container</span></div><div class='line' id='LC490'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">container</span><span class="p">)</span></div><div class='line' id='LC491'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">container</span> <span class="o">=</span> <span class="nx">findContainerFor</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">container</span><span class="p">)</span></div><div class='line' id='LC492'><br/></div><div class='line' id='LC493'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">options</span></div><div class='line' id='LC494'><span class="p">}</span></div><div class='line' id='LC495'><br/></div><div class='line' id='LC496'><span class="c1">// Internal: Find container element for a variety of inputs.</span></div><div class='line' id='LC497'><span class="c1">//</span></div><div class='line' id='LC498'><span class="c1">// Because we can&#39;t persist elements using the history API, we must be</span></div><div class='line' id='LC499'><span class="c1">// able to find a String selector that will consistently find the Element.</span></div><div class='line' id='LC500'><span class="c1">//</span></div><div class='line' id='LC501'><span class="c1">// container - A selector String, jQuery object, or DOM Element.</span></div><div class='line' id='LC502'><span class="c1">//</span></div><div class='line' id='LC503'><span class="c1">// Returns a jQuery object whose context is `document` and has a selector.</span></div><div class='line' id='LC504'><span class="kd">function</span> <span class="nx">findContainerFor</span><span class="p">(</span><span class="nx">container</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC505'>&nbsp;&nbsp;<span class="nx">container</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">container</span><span class="p">)</span></div><div class='line' id='LC506'><br/></div><div class='line' id='LC507'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">container</span><span class="p">.</span><span class="nx">length</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC508'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="s2">&quot;no pjax container for &quot;</span> <span class="o">+</span> <span class="nx">container</span><span class="p">.</span><span class="nx">selector</span></div><div class='line' id='LC509'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">container</span><span class="p">.</span><span class="nx">selector</span> <span class="o">!==</span> <span class="s1">&#39;&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">container</span><span class="p">.</span><span class="nx">context</span> <span class="o">===</span> <span class="nb">document</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC510'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">container</span></div><div class='line' id='LC511'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">container</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;id&#39;</span><span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC512'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#&#39;</span> <span class="o">+</span> <span class="nx">container</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;id&#39;</span><span class="p">))</span></div><div class='line' id='LC513'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC514'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="s2">&quot;cant get selector for pjax container!&quot;</span></div><div class='line' id='LC515'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC516'><span class="p">}</span></div><div class='line' id='LC517'><br/></div><div class='line' id='LC518'><span class="c1">// Internal: Filter and find all elements matching the selector.</span></div><div class='line' id='LC519'><span class="c1">//</span></div><div class='line' id='LC520'><span class="c1">// Where $.fn.find only matches descendants, findAll will test all the</span></div><div class='line' id='LC521'><span class="c1">// top level elements in the jQuery object as well.</span></div><div class='line' id='LC522'><span class="c1">//</span></div><div class='line' id='LC523'><span class="c1">// elems    - jQuery object of Elements</span></div><div class='line' id='LC524'><span class="c1">// selector - String selector to match</span></div><div class='line' id='LC525'><span class="c1">//</span></div><div class='line' id='LC526'><span class="c1">// Returns a jQuery object.</span></div><div class='line' id='LC527'><span class="kd">function</span> <span class="nx">findAll</span><span class="p">(</span><span class="nx">elems</span><span class="p">,</span> <span class="nx">selector</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC528'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">results</span> <span class="o">=</span> <span class="nx">$</span><span class="p">()</span></div><div class='line' id='LC529'>&nbsp;&nbsp;<span class="nx">elems</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC530'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">is</span><span class="p">(</span><span class="nx">selector</span><span class="p">))</span></div><div class='line' id='LC531'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">results</span> <span class="o">=</span> <span class="nx">results</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="k">this</span><span class="p">)</span></div><div class='line' id='LC532'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">results</span> <span class="o">=</span> <span class="nx">results</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="nx">selector</span><span class="p">,</span> <span class="k">this</span><span class="p">)</span></div><div class='line' id='LC533'>&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC534'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">results</span></div><div class='line' id='LC535'><span class="p">}</span></div><div class='line' id='LC536'><br/></div><div class='line' id='LC537'><span class="c1">// Internal: Extracts container and metadata from response.</span></div><div class='line' id='LC538'><span class="c1">//</span></div><div class='line' id='LC539'><span class="c1">// 1. Extracts X-PJAX-URL header if set</span></div><div class='line' id='LC540'><span class="c1">// 2. Extracts inline &lt;title&gt; tags</span></div><div class='line' id='LC541'><span class="c1">// 3. Builds response Element and extracts fragment if set</span></div><div class='line' id='LC542'><span class="c1">//</span></div><div class='line' id='LC543'><span class="c1">// data    - String response data</span></div><div class='line' id='LC544'><span class="c1">// xhr     - XHR response</span></div><div class='line' id='LC545'><span class="c1">// options - pjax options Object</span></div><div class='line' id='LC546'><span class="c1">//</span></div><div class='line' id='LC547'><span class="c1">// Returns an Object with url, title, and contents keys.</span></div><div class='line' id='LC548'><span class="kd">function</span> <span class="nx">extractContainer</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">xhr</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC549'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="p">{}</span></div><div class='line' id='LC550'><br/></div><div class='line' id='LC551'>&nbsp;&nbsp;<span class="c1">// Prefer X-PJAX-URL header if it was set, otherwise fallback to</span></div><div class='line' id='LC552'>&nbsp;&nbsp;<span class="c1">// using the original requested url.</span></div><div class='line' id='LC553'>&nbsp;&nbsp;<span class="nx">obj</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="nx">stripPjaxParam</span><span class="p">(</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">getResponseHeader</span><span class="p">(</span><span class="s1">&#39;X-PJAX-URL&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="nx">options</span><span class="p">.</span><span class="nx">requestUrl</span><span class="p">)</span></div><div class='line' id='LC554'><br/></div><div class='line' id='LC555'>&nbsp;&nbsp;<span class="c1">// Attempt to parse response html into elements</span></div><div class='line' id='LC556'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$data</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span></div><div class='line' id='LC557'><br/></div><div class='line' id='LC558'>&nbsp;&nbsp;<span class="c1">// If response data is empty, return fast</span></div><div class='line' id='LC559'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$data</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC560'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span></div><div class='line' id='LC561'><br/></div><div class='line' id='LC562'>&nbsp;&nbsp;<span class="c1">// If there&#39;s a &lt;title&gt; tag in the response, use it as</span></div><div class='line' id='LC563'>&nbsp;&nbsp;<span class="c1">// the page&#39;s title.</span></div><div class='line' id='LC564'>&nbsp;&nbsp;<span class="nx">obj</span><span class="p">.</span><span class="nx">title</span> <span class="o">=</span> <span class="nx">findAll</span><span class="p">(</span><span class="nx">$data</span><span class="p">,</span> <span class="s1">&#39;title&#39;</span><span class="p">).</span><span class="nx">last</span><span class="p">().</span><span class="nx">text</span><span class="p">()</span></div><div class='line' id='LC565'><br/></div><div class='line' id='LC566'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">fragment</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC567'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If they specified a fragment, look for it in the response</span></div><div class='line' id='LC568'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// and pull it out.</span></div><div class='line' id='LC569'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$fragment</span> <span class="o">=</span> <span class="nx">findAll</span><span class="p">(</span><span class="nx">$data</span><span class="p">,</span> <span class="nx">options</span><span class="p">.</span><span class="nx">fragment</span><span class="p">).</span><span class="nx">first</span><span class="p">()</span></div><div class='line' id='LC570'><br/></div><div class='line' id='LC571'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$fragment</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC572'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">.</span><span class="nx">contents</span> <span class="o">=</span> <span class="nx">$fragment</span><span class="p">.</span><span class="nx">contents</span><span class="p">()</span></div><div class='line' id='LC573'><br/></div><div class='line' id='LC574'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If there&#39;s no title, look for data-title and title attributes</span></div><div class='line' id='LC575'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// on the fragment</span></div><div class='line' id='LC576'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">obj</span><span class="p">.</span><span class="nx">title</span><span class="p">)</span></div><div class='line' id='LC577'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">.</span><span class="nx">title</span> <span class="o">=</span> <span class="nx">$fragment</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;title&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="nx">$fragment</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;title&#39;</span><span class="p">)</span></div><div class='line' id='LC578'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC579'><br/></div><div class='line' id='LC580'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="sr">/&lt;html/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">data</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC581'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">.</span><span class="nx">contents</span> <span class="o">=</span> <span class="nx">$data</span></div><div class='line' id='LC582'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC583'><br/></div><div class='line' id='LC584'>&nbsp;&nbsp;<span class="c1">// Clean up any &lt;title&gt; tags</span></div><div class='line' id='LC585'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">contents</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC586'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Remove any parent title elements</span></div><div class='line' id='LC587'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">.</span><span class="nx">contents</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">contents</span><span class="p">.</span><span class="nx">not</span><span class="p">(</span><span class="s1">&#39;title&#39;</span><span class="p">)</span></div><div class='line' id='LC588'><br/></div><div class='line' id='LC589'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Then scrub any titles from their descendents</span></div><div class='line' id='LC590'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">.</span><span class="nx">contents</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;title&#39;</span><span class="p">).</span><span class="nx">remove</span><span class="p">()</span></div><div class='line' id='LC591'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC592'><br/></div><div class='line' id='LC593'>&nbsp;&nbsp;<span class="c1">// Trim any whitespace off the title</span></div><div class='line' id='LC594'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">title</span><span class="p">)</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">title</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">trim</span><span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">title</span><span class="p">)</span></div><div class='line' id='LC595'><br/></div><div class='line' id='LC596'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span></div><div class='line' id='LC597'><span class="p">}</span></div><div class='line' id='LC598'><br/></div><div class='line' id='LC599'><span class="c1">// Internal: History DOM caching class.</span></div><div class='line' id='LC600'><span class="kd">var</span> <span class="nx">cacheMapping</span>      <span class="o">=</span> <span class="p">{}</span></div><div class='line' id='LC601'><span class="kd">var</span> <span class="nx">cacheForwardStack</span> <span class="o">=</span> <span class="p">[]</span></div><div class='line' id='LC602'><span class="kd">var</span> <span class="nx">cacheBackStack</span>    <span class="o">=</span> <span class="p">[]</span></div><div class='line' id='LC603'><br/></div><div class='line' id='LC604'><span class="c1">// Push previous state id and container contents into the history</span></div><div class='line' id='LC605'><span class="c1">// cache. Should be called in conjunction with `pushState` to save the</span></div><div class='line' id='LC606'><span class="c1">// previous container contents.</span></div><div class='line' id='LC607'><span class="c1">//</span></div><div class='line' id='LC608'><span class="c1">// id    - State ID Number</span></div><div class='line' id='LC609'><span class="c1">// value - DOM Element to cache</span></div><div class='line' id='LC610'><span class="c1">//</span></div><div class='line' id='LC611'><span class="c1">// Returns nothing.</span></div><div class='line' id='LC612'><span class="kd">function</span> <span class="nx">cachePush</span><span class="p">(</span><span class="nx">id</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC613'>&nbsp;&nbsp;<span class="nx">cacheMapping</span><span class="p">[</span><span class="nx">id</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span></div><div class='line' id='LC614'>&nbsp;&nbsp;<span class="nx">cacheBackStack</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">id</span><span class="p">)</span></div><div class='line' id='LC615'><br/></div><div class='line' id='LC616'>&nbsp;&nbsp;<span class="c1">// Remove all entires in forward history stack after pushing</span></div><div class='line' id='LC617'>&nbsp;&nbsp;<span class="c1">// a new page.</span></div><div class='line' id='LC618'>&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">cacheForwardStack</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span></div><div class='line' id='LC619'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">cacheMapping</span><span class="p">[</span><span class="nx">cacheForwardStack</span><span class="p">.</span><span class="nx">shift</span><span class="p">()]</span></div><div class='line' id='LC620'><br/></div><div class='line' id='LC621'>&nbsp;&nbsp;<span class="c1">// Trim back history stack to max cache length.</span></div><div class='line' id='LC622'>&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">cacheBackStack</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="nx">pjax</span><span class="p">.</span><span class="nx">defaults</span><span class="p">.</span><span class="nx">maxCacheLength</span><span class="p">)</span></div><div class='line' id='LC623'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">cacheMapping</span><span class="p">[</span><span class="nx">cacheBackStack</span><span class="p">.</span><span class="nx">shift</span><span class="p">()]</span></div><div class='line' id='LC624'><span class="p">}</span></div><div class='line' id='LC625'><br/></div><div class='line' id='LC626'><span class="c1">// Shifts cache from directional history cache. Should be</span></div><div class='line' id='LC627'><span class="c1">// called on `popstate` with the previous state id and container</span></div><div class='line' id='LC628'><span class="c1">// contents.</span></div><div class='line' id='LC629'><span class="c1">//</span></div><div class='line' id='LC630'><span class="c1">// direction - &quot;forward&quot; or &quot;back&quot; String</span></div><div class='line' id='LC631'><span class="c1">// id        - State ID Number</span></div><div class='line' id='LC632'><span class="c1">// value     - DOM Element to cache</span></div><div class='line' id='LC633'><span class="c1">//</span></div><div class='line' id='LC634'><span class="c1">// Returns nothing.</span></div><div class='line' id='LC635'><span class="kd">function</span> <span class="nx">cachePop</span><span class="p">(</span><span class="nx">direction</span><span class="p">,</span> <span class="nx">id</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC636'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">pushStack</span><span class="p">,</span> <span class="nx">popStack</span></div><div class='line' id='LC637'>&nbsp;&nbsp;<span class="nx">cacheMapping</span><span class="p">[</span><span class="nx">id</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span></div><div class='line' id='LC638'><br/></div><div class='line' id='LC639'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">direction</span> <span class="o">===</span> <span class="s1">&#39;forward&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC640'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pushStack</span> <span class="o">=</span> <span class="nx">cacheBackStack</span></div><div class='line' id='LC641'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">popStack</span>  <span class="o">=</span> <span class="nx">cacheForwardStack</span></div><div class='line' id='LC642'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC643'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pushStack</span> <span class="o">=</span> <span class="nx">cacheForwardStack</span></div><div class='line' id='LC644'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">popStack</span>  <span class="o">=</span> <span class="nx">cacheBackStack</span></div><div class='line' id='LC645'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC646'><br/></div><div class='line' id='LC647'>&nbsp;&nbsp;<span class="nx">pushStack</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">id</span><span class="p">)</span></div><div class='line' id='LC648'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">id</span> <span class="o">=</span> <span class="nx">popStack</span><span class="p">.</span><span class="nx">pop</span><span class="p">())</span></div><div class='line' id='LC649'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">cacheMapping</span><span class="p">[</span><span class="nx">id</span><span class="p">]</span></div><div class='line' id='LC650'><span class="p">}</span></div><div class='line' id='LC651'><br/></div><div class='line' id='LC652'><span class="c1">// Install pjax functions on $.pjax to enable pushState behavior.</span></div><div class='line' id='LC653'><span class="c1">//</span></div><div class='line' id='LC654'><span class="c1">// Does nothing if already enabled.</span></div><div class='line' id='LC655'><span class="c1">//</span></div><div class='line' id='LC656'><span class="c1">// Examples</span></div><div class='line' id='LC657'><span class="c1">//</span></div><div class='line' id='LC658'><span class="c1">//     $.pjax.enable()</span></div><div class='line' id='LC659'><span class="c1">//</span></div><div class='line' id='LC660'><span class="c1">// Returns nothing.</span></div><div class='line' id='LC661'><span class="kd">function</span> <span class="nx">enable</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC662'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">pjax</span> <span class="o">=</span> <span class="nx">fnPjax</span></div><div class='line' id='LC663'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">pjax</span> <span class="o">=</span> <span class="nx">pjax</span></div><div class='line' id='LC664'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">pjax</span><span class="p">.</span><span class="nx">enable</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">noop</span></div><div class='line' id='LC665'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">pjax</span><span class="p">.</span><span class="nx">disable</span> <span class="o">=</span> <span class="nx">disable</span></div><div class='line' id='LC666'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">pjax</span><span class="p">.</span><span class="nx">click</span> <span class="o">=</span> <span class="nx">handleClick</span></div><div class='line' id='LC667'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">pjax</span><span class="p">.</span><span class="nx">reload</span> <span class="o">=</span> <span class="nx">pjaxReload</span></div><div class='line' id='LC668'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">pjax</span><span class="p">.</span><span class="nx">defaults</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC669'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout</span><span class="o">:</span> <span class="mi">650</span><span class="p">,</span></div><div class='line' id='LC670'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">push</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC671'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC672'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;GET&#39;</span><span class="p">,</span></div><div class='line' id='LC673'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dataType</span><span class="o">:</span> <span class="s1">&#39;html&#39;</span><span class="p">,</span></div><div class='line' id='LC674'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scrollTo</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC675'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">maxCacheLength</span><span class="o">:</span> <span class="mi">20</span></div><div class='line' id='LC676'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC677'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;popstate.pjax&#39;</span><span class="p">,</span> <span class="nx">onPjaxPopstate</span><span class="p">)</span></div><div class='line' id='LC678'><span class="p">}</span></div><div class='line' id='LC679'><br/></div><div class='line' id='LC680'><span class="c1">// Disable pushState behavior.</span></div><div class='line' id='LC681'><span class="c1">//</span></div><div class='line' id='LC682'><span class="c1">// This is the case when a browser doesn&#39;t support pushState. It is</span></div><div class='line' id='LC683'><span class="c1">// sometimes useful to disable pushState for debugging on a modern</span></div><div class='line' id='LC684'><span class="c1">// browser.</span></div><div class='line' id='LC685'><span class="c1">//</span></div><div class='line' id='LC686'><span class="c1">// Examples</span></div><div class='line' id='LC687'><span class="c1">//</span></div><div class='line' id='LC688'><span class="c1">//     $.pjax.disable()</span></div><div class='line' id='LC689'><span class="c1">//</span></div><div class='line' id='LC690'><span class="c1">// Returns nothing.</span></div><div class='line' id='LC691'><span class="kd">function</span> <span class="nx">disable</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC692'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">pjax</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="k">this</span> <span class="p">}</span></div><div class='line' id='LC693'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">pjax</span> <span class="o">=</span> <span class="nx">fallbackPjax</span></div><div class='line' id='LC694'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">pjax</span><span class="p">.</span><span class="nx">enable</span> <span class="o">=</span> <span class="nx">enable</span></div><div class='line' id='LC695'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">pjax</span><span class="p">.</span><span class="nx">disable</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">noop</span></div><div class='line' id='LC696'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">pjax</span><span class="p">.</span><span class="nx">click</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">noop</span></div><div class='line' id='LC697'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">pjax</span><span class="p">.</span><span class="nx">reload</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">reload</span></div><div class='line' id='LC698'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">unbind</span><span class="p">(</span><span class="s1">&#39;popstate.pjax&#39;</span><span class="p">,</span> <span class="nx">onPjaxPopstate</span><span class="p">)</span></div><div class='line' id='LC699'><span class="p">}</span></div><div class='line' id='LC700'><br/></div><div class='line' id='LC701'><br/></div><div class='line' id='LC702'><span class="c1">// Add the state property to jQuery&#39;s event object so we can use it in</span></div><div class='line' id='LC703'><span class="c1">// $(window).bind(&#39;popstate&#39;)</span></div><div class='line' id='LC704'><span class="k">if</span> <span class="p">(</span> <span class="nx">$</span><span class="p">.</span><span class="nx">inArray</span><span class="p">(</span><span class="s1">&#39;state&#39;</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">props</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="p">)</span></div><div class='line' id='LC705'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">props</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="s1">&#39;state&#39;</span><span class="p">)</span></div><div class='line' id='LC706'><br/></div><div class='line' id='LC707'>&nbsp;<span class="c1">// Is pjax supported by this browser?</span></div><div class='line' id='LC708'><span class="nx">$</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">pjax</span> <span class="o">=</span></div><div class='line' id='LC709'>&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">history</span> <span class="o">&amp;&amp;</span> <span class="nb">window</span><span class="p">.</span><span class="nx">history</span><span class="p">.</span><span class="nx">pushState</span> <span class="o">&amp;&amp;</span> <span class="nb">window</span><span class="p">.</span><span class="nx">history</span><span class="p">.</span><span class="nx">replaceState</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC710'>&nbsp;&nbsp;<span class="c1">// pushState isn&#39;t reliable on iOS until 5.</span></div><div class='line' id='LC711'>&nbsp;&nbsp;<span class="o">!</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/</span><span class="p">)</span></div><div class='line' id='LC712'><br/></div><div class='line' id='LC713'><span class="nx">$</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">pjax</span> <span class="o">?</span> <span class="nx">enable</span><span class="p">()</span> <span class="o">:</span> <span class="nx">disable</span><span class="p">()</span></div><div class='line' id='LC714'><br/></div><div class='line' id='LC715'><span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading large-loading-area" style="display:none;" data-tree-list-url="/defunkt/jquery-pjax/tree-list/857b1d5b344a41d26d6a10ed3f833c65ce509fe2" data-blob-url-prefix="/defunkt/jquery-pjax/blob/857b1d5b344a41d26d6a10ed3f833c65ce509fe2">
  <img src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-64.gif?1338956357" height="64" width="64">
</div>

        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer" >
        
  <div class="upper_footer">
     <div class="container clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Clients</h4>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://windows.github.com/">GitHub for Windows</a></li>
         <li><a href="http://eclipse.github.com/">GitHub for Eclipse</a></li>
         <li><a href="http://mobile.github.com/">GitHub Mobile Apps</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://get.gaug.es/">Gauges: Web analytics</a></li>
         <li><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></li>
         <li><a href="https://gist.github.com">Gist: Code snippets</a></li>

         <h4 class="second">Extras</h4>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="container clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2012 <span title="0.44320s from fe1.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

  </div><!-- /.site -->
</div><!-- /.lower_footer -->

      </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last js-hidden-pane" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
        <dd>Preview comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
          <dd>Preview comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div class="js-hidden-pane" >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first js-hidden-pane" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <h3>Notifications</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open notification</dd>
        </dl>
      </div><!-- /.column.first -->

      <div class="column second">
        <dl class="keyboard-mappings">
          <dt>e <em>or</em> shift i <em>or</em> y</dt>
          <dd>Mark as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift m</dt>
          <dd>Mute thread</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div id="ajax-error-message">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="ajax-error-dismiss">Dismiss</a>
    </div>

    <div id="logo-popup">
      <h2>Looking for the GitHub logo?</h2>
      <ul>
        <li>
          <h4>GitHub Logo</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip"><img alt="Github_logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/github_logo.png?1338956357" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip" class="minibutton btn-download download">Download</a>
        </li>
        <li>
          <h4>The Octocat</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip"><img alt="Octocat" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/octocat.png?1338956357" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip" class="minibutton btn-download download">Download</a>
        </li>
      </ul>
    </div>

    
    
    <span id='server_response_time' data-time='0.44573' data-host='fe1'></span>
  </body>
</html>

