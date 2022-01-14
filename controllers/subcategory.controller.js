const Subcategory = require("../models/subcategory");


exports.getAllSubcategory = function (req, res) {
    Subcategory.find({}, function (err, subcategories) {
        if (err) {
            res.json({ status: false, data: 'Invalid Request!' });
        }

        res.json({ status: true, data: subcategories });
    });
};




exports.AddSubcategory = function (req, res) {
    let categoryData = req.body;
    Subcategory.findOne({ title: req.body.title }, (error, subcategory) => {
        if (error) {
            console.log(error)
        }
        else if (!subcategory) {
            let AddSubcategory = new Subcategory(categoryData);

            AddSubcategory.save(function (err, subcategories) {

                if (err) {
                    res.json({ status: false, data: 'Unable to add!' });
                }
                console.log(subcategories)
                res.json({ status: true, data: subcategories });
            });
        }

        else {
            console.log("Title Already exists")
            res.json({ status: false, data: 'Title Already exists!' });
        }

    })
};


exports.getSubcategory = function (req, res) {
    Subcategory.findById(req.params.id, function (err, subcategories) {
        if (err) {
            res.json({ status: false, data: 'Invalid ID!' });
        }

        res.json({ status: true, data: subcategories });
    })
};


exports.updateSubcategory = function (req, res) {
    const id = req.params.id;
    Subcategory.findOne({ title: req.body.title }, (error, subcategory) => {
        if (error) {
            console.log(error)
        }
        else if ((!subcategory) || (subcategory && (subcategory.id == id))) {
            Subcategory.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, subcategories) {
                if (err) {
                    res.json({ status: false, data: 'Unable to update!' });
                }
                res.json({ status: true, data: subcategories });
            });
        }
        else {
            console.log("Title Already exists")
            res.json({ status: false, data: 'Title Already exists!' });
        }
    })
};






exports.deleteSubcategory = function (req, res) {
    Subcategory.remove({ _id: req.params.id }, function (err, subcategories) {
        if (err) {
            res.json({ status: false, data: 'Unable to delete!' });
        }

        res.json({ status: true, data: 'Subcategories removed successfully!' });
    })
};







