import axios from "axios";

const postUser = async (user) => {
    try {
        const tokenResponse = await axios.get("https://frontend-test-assignment-api.abz.agency/api/v1/token");
        const token = tokenResponse.data.token;
        const positionResponse = await axios.get("https://frontend-test-assignment-api.abz.agency/api/v1/positions");
        const positionLength = positionResponse.data.positions.length;


        const formData = new FormData()
        formData.append("name", user.name)
        formData.append("email", user.email)
        formData.append("photo", user.photo)
        formData.append("option", user.option)
        formData.append("phone", user.phone)
        formData.append("position_id", positionLength)


        const response = await axios.post(
            "https://frontend-test-assignment-api.abz.agency/api/v1/users",
            formData,
            {
                headers: {
                    'Token':`${token}`,

                }
            }
        );

        return(response);

    } catch (err) {
        return err
    }
};

export default postUser;