import Users from "model/user"

// GET REQUST
export async function getUsers(req, res) {
    try {
        const users = await Users.find();
        if (!users) return res.status(404).json({ error: "Data Not Found" });
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ error: "Error while Fetching Data..." })
    }
}

export async function getUser(req, res) {
    try {
        const { userId } = req.query;
        if (userId) {
            const user = await Users.findById(userId);
            res.status(200).json(user)
        }
        res.status(404).json({ error: "User Not Selected..." })
    } catch (error) {
        res.status(404).json({ error: "Error while Fetching Data" })
    }
}

// POST REQUEST
export async function postUsers(req, res) {
    try {
        const formData = req.body;
        if (!formData) return res.status(404).json({ error: "form data not provided..." })
        Users.create(formData, function (err, data) {
            return res.status(200).json(data)
        })

    } catch (error) {
        res.status(404).json({ error: "Error while Posting Data" })
    }
}


// PUT REQUEST
export async function putUsers(req, res) {
    try {
        const { userId } = req.query;
        const formData = req.body;
        console.log(formData)
        if (userId && formData) {
            const user = await Users.findByIdAndUpdate(userId, formData)
            res.status(200).json(user);
        }
        res.status(404).json({ error: "User Not Selected..." })

    } catch (error) {
        res.status(404).json({ error: "Error while Posting Data" })
    }
}

export async function putUser(req, res) {
    try {
        const { userId } = req.query;
        const formData = req.body;
        console.log(formData)
        if (userId && formData) {
            const user = await Users.findByIdAndUpdate(userId, formData)
            res.status(200).json(user);
        }
        res.status(404).json({ error: "User Not Selected..." })

    } catch (error) {
        res.status(404).json({ error: "Error while Posting Data" })
    }
}


// DELETE REQUEST
export async function deleteUsers(req, res) {
    try {
        const userId = req.query;

        if (userId) {
            const user = await Users.findByIdAndDelete(userId)
            res.status(200).json(user);
        }
        res.status(404).json({ error: "User Not Deleted..." })

    } catch (error) {
        res.status(404).json({ error: "Error while Posting Data" })
    }
}
export async function deleteUser(req, res) {
    try {
        const userId = req.query;

        if (userId) {
            const user = await Users.findByIdAndDelete(userId)
            res.status(200).json(user);
        }
        res.status(404).json({ error: "User Not Deleted..." })

    } catch (error) {
        res.status(404).json({ error: "Error while Posting Data" })
    }
}