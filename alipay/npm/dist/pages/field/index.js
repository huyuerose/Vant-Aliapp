const _my = require("../../__antmove/api/index.js")(my);
const wx = _my;
import Page from "../../common/page";
Page({
    data: {
        sms: "",
        value: "",
        password: "",
        username: "",
        username2: "",
        username3: "",
        message: "",
        phone: "1365577"
    },

    onClickIcon() {
        wx.showToast({
            icon: "none",
            title: "点击图标"
        });
    }
});
