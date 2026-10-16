exports.hasRole = (roleToCheck) => {
    return (req, res, next) => {
        if (req.payload.role.some(role => roleToCheck.includes(role.code))) {
            next();
        } else {
            return res.status(403).json({ error: "Vous n'avez pas les droits pour réaliser cette action" });
        }
    }
}