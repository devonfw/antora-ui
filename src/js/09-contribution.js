;(function () {
  function getCookie (cname) {
    const name = cname + '='
    const decodedCookie = decodeURIComponent(document.cookie)
    const ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  }

  function setCookie (name, value, days) {
    var expires = ''
    if (days) {
      var date = new Date()
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
      expires = '; expires=' + date.toUTCString()
    }
    document.cookie = name + '=' + (value || '') + expires + '; domain=' + window.location.hostname + '; secure; path=/'
  }

  var contributionBtn = document.getElementById('contribution-btn')
  var contributionDiv = document.getElementById('contribution-div')
  var contributionOverlay = document.getElementById('contribution-overlay')
  var readContributionInfo = getCookie('read_contribution_info')
  var NavbarHeight = document.querySelector('.navbar').offsetHeight
  var ToolbarHeight = document.querySelector('.toolbar').offsetHeight
  var toggleContributionDiv = function (btn, div, overlay, cookie) {
    btn.classList.toggle('active')
    div.classList.toggle('active')
    overlay.classList.toggle('active')
    if (cookie.length === 0) {
      setCookie('read_contribution_info', 'true', 300)
    }
  }
  contributionBtn.style.marginTop = NavbarHeight + ToolbarHeight + 10 + 'px'
  if (!contributionDiv) return
  if (readContributionInfo.length === 0) {
    contributionBtn.classList.add('active')
    contributionDiv.classList.add('active')
    contributionOverlay.classList.add('active')
  }
  contributionBtn.addEventListener('click', function () {
    toggleContributionDiv(contributionBtn, contributionDiv, contributionOverlay, readContributionInfo)
  })
  contributionOverlay.addEventListener('click', function () {
    toggleContributionDiv(contributionBtn, contributionDiv, contributionOverlay, readContributionInfo)
  })
})()
