;(function () {
  var contributionBtn = document.getElementById('contribution-btn')
  var contributionDiv = document.getElementById('contribution-div')
  var contributionOverlay = document.getElementById('contribution-overlay')
  var readContributionInfo = getCookie('read_contribution_info')
  var toggleContributionDiv = function (btn, div, overlay, cookie) {
    btn.classList.toggle('active')
    div.classList.toggle('active')
    overlay.classList.toggle('active')
    if (cookie.length === 0) {
      setCookie('read_contribution_info', 'true', 300)
    }
  }
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
