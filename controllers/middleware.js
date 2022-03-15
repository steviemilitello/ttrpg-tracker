const auth = (req, res, next) => {
	if (req.session.loggedIn) {
		next()
	} else {
		res.redirect('/auth/login')
	}
}

module.exports = { auth }
