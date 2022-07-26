const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
              <img src="/images/404_error.jpg" alt="Funny Donkey"/>
             </div>
              Photo by <a href="https://unsplash.com/@dan_scape?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dan Cook</a> on <a href="https://unsplash.com/s/photos/funny-picture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
          </main>
      </Def>
    )
  }
  

module.exports = error404
