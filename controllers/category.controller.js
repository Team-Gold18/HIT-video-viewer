const Category = require("../models/category");


exports.getAllCategory = function (req, res) {
    Category.find({}, function (err, categories) {
        if (err) {
            res.json({ status: false, data: 'Invalid Request!' });
        }

        res.json({ status: true, data: categories });
    });
};




exports.AddCategory = function (req, res) {
    let categoryData = req.body;
    Category.findOne({ title: req.body.title }, (error, category) => {
        if (error) {
            console.log(error)
        }
        else if (!category) {
            let AddCategory = new Category(categoryData);

            AddCategory.save(function (err, categories) {

                if (err) {
                    res.json({ status: false, data: 'Unable to add!' });
                }
                console.log(categories)
                res.json({ status: true, data: categories });
            });
        }

        else {
            console.log("Title Already exists")
            res.json({ status: false, data: 'Title Already exists!' });
        }

    })
};


exports.getCategory = function (req, res) {
    Category.findById(req.params.id, function (err, categories) {
        if (err) {
            res.json({ status: false, data: 'Invalid ID!' });
        }

        res.json({ status: true, data: categories });
    })
};


exports.updateCategory = function (req, res) {
    const id = req.params.id;
    Category.findOne({ title: req.body.title }, (error, category) => {
        if (error) {
            console.log(error)
        }
        else if ((!category) || (category && (category.id == id))) {
            Category.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, categories) {
                if (err) {
                    res.json({ status: false, data: 'Unable to update!' });
                }
                res.json({ status: true, data: categories });
            });
        }
        else {
            console.log("Title Already exists")
            res.json({ status: false, data: 'Title Already exists!' });
        }
    })
};






exports.deleteCategory = function (req, res) {
    Category.remove({ _id: req.params.id }, function (err, categories) {
        if (err) {
            res.json({ status: false, data: 'Unable to delete!' });
        }

        res.json({ status: true, data: 'Categories removed successfully!' });
    })
};







