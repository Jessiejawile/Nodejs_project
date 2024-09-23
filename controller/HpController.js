const ph = {
    nom: (req, res) => {
        res.render('index', { message: 'Names' });
    },
    routeTwo: (req, res) => {
        res.render('route-two', { message: 'Matthew Balinton' });
    },
    routeThree: (req, res) => {
        res.render('route-three', { message: 'Reymel Mislang' });
    },
    routeFour: (req, res) => {
        res.render('route-four', { message: 'Ivan Fababaer' });
    },
    routeFive: (req, res) => {
        res.render('route-five', { message: 'Jessie Jawile' });
    },
    routeSix: (req, res) => {
        res.render('route-six', { message: 'Darylld Tupaz' });
}
};

module.exports = ph;
