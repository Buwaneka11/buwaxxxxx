const axios = require('axios');
const { MessageType, Mimetype } = require("@adiwajshing/baileys");
const { text, image } = MessageType;
const fs = require("fs");
const path = require("path");

path.join(__dirname,"../readme/images/logo.jpeg")
const sourcecode = (infor4, client, xxx3) => new Promise((resolve, reject) => {
    let infor5 = { ...infor4 };
    let xxx = { ...xxx3 };

    from = infor5.from;
    axios.get(`https://api.github.com/repos/akm-akm/xxx-bot`)
        .then((response) => {
            let data = response.data;

            msg = "š§ š§  *Sharing is caring* š§ š§ \n\n" +
                "š±āš¤ *Github Repository-*\n```https://github.com/akm-akm/xxx-bot```\n\n"+
                "šØāš» *Repo Owner:* ```" + data.owner.login + "```\n" +
                "š» *Repo Name:*  ```" + data.name + "```\n" +
               // "šŖ *Desc:*              ```" + data.description + "```\n" +
                "š *Language:*     ```" + data.language + "```\n" +
                "ā­ *Stars:*             ```" + data.stargazers_count + "```\n" +
                "š *Forks:*            ```" + data.forks_count + "```\n" +
                "š§° *Issues:*           ```" + data.open_issues + "```\n" +
                "šØ *Watchers:*      ```" + data.watchers_count + "```\n" +
                "š¾ *Size:*               ```" + (data.size / 1024).toFixed(0) + " KB```\n"+
                "š *License:*         ```" + data.license.key + " ```\n"+
                "\nš¤š¤ *_Bot made by AKM_* š¤š¤"
            client.sendMessage(from,
                fs.readFileSync(path.join(__dirname, "../readme/images/logo.jpeg")
                ), image, {
                quoted: xxx,
                detectLinks: false,
                caption: msg,
                mimetype: Mimetype.jpeg
            })
            resolve();

        })
        .catch((e) => {
            console.log(e);
            client.sendMessage(from, "š¤  ```Server error.```", text, {
                quoted: xxx
            });
            reject();
        })
})
module.exports.sourcecode = sourcecode;