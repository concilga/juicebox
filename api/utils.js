function requireUser(req, res, next) {
    if (!req.user) {
      next({
        name: "MissingUserError",
        message: "You must be logged in to perform this action"
      });
    }
  
    next();
  }

module.exports = {
    requireUser
}

/* example template :
    someRouter.post('/some/route', requireUser, async (req, res, next) => {

    });
*/