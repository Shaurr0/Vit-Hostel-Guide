function showErr(id, msg) {
    var el = document.getElementById(id);
    if (el) el.innerText = msg;
}

function clearErr(id) {
    var el = document.getElementById(id);
    if (el) el.innerText = "";
}

function validEmail(email) {
    return email.indexOf("@") !== -1 && email.indexOf(".") !== -1;
}

function checkStudReg(e) {
    e.preventDefault();
    var ok = true;

    var fname = document.getElementById("sr_fname").value.trim();
    var lname = document.getElementById("sr_lname").value.trim();
    var email = document.getElementById("sr_email").value.trim();
    var phone = document.getElementById("sr_phone").value.trim();
    var block = document.getElementById("sr_block").value;
    var room = document.getElementById("sr_room").value.trim();
    var year = document.getElementById("sr_year").value;

    clearErr("err_sr_fname"); clearErr("err_sr_lname");
    clearErr("err_sr_email"); clearErr("err_sr_phone");
    clearErr("err_sr_block"); clearErr("err_sr_room");
    clearErr("err_sr_year"); clearErr("suc_studreg");

    if (!fname) { showErr("err_sr_fname", "First name is required"); document.getElementById("sr_fname").focus(); ok = false; }
    else if (!lname) { showErr("err_sr_lname", "Last name is required"); document.getElementById("sr_lname").focus(); ok = false; }
    else if (!email) { showErr("err_sr_email", "Email is required"); document.getElementById("sr_email").focus(); ok = false; }
    else if (!validEmail(email)) { showErr("err_sr_email", "Enter a valid email address"); document.getElementById("sr_email").focus(); ok = false; }
    else if (!phone) { showErr("err_sr_phone", "Phone number is required"); document.getElementById("sr_phone").focus(); ok = false; }
    else if (phone.length !== 10 || isNaN(phone)) { showErr("err_sr_phone", "Phone must be exactly 10 digits"); document.getElementById("sr_phone").focus(); ok = false; }
    else if (!block) { showErr("err_sr_block", "Please select a block"); document.getElementById("sr_block").focus(); ok = false; }
    else if (!room) { showErr("err_sr_room", "Room number is required"); document.getElementById("sr_room").focus(); ok = false; }
    else if (!year) { showErr("err_sr_year", "Please select year of study"); document.getElementById("sr_year").focus(); ok = false; }

    if (ok) {
        document.getElementById("suc_studreg").innerText = "Form submitted.";
    }
}

function checkLogin(e) {
    e.preventDefault();
    var uname = document.getElementById("log_user").value.trim();
    var pwd = document.getElementById("log_pwd").value;
    clearErr("err_log_user"); clearErr("err_log_pwd"); clearErr("suc_login");

    if (!uname) { showErr("err_log_user", "Username or email is required"); document.getElementById("log_user").focus(); return; }
    if (!pwd) { showErr("err_log_pwd", "Password is required"); document.getElementById("log_pwd").focus(); return; }
    if (pwd.length < 6) { showErr("err_log_pwd", "Password must be at least 6 characters"); document.getElementById("log_pwd").focus(); return; }

    document.getElementById("suc_login").innerText = "Form submitted.";
}

document.getElementById("log_user").addEventListener("focus", function() {
    document.getElementById("log_userhint").style.display = "block";
});

document.getElementById("log_user").addEventListener("blur", function() {
    document.getElementById("log_userhint").style.display = "none";
});

var newpwd, confirmpwd;

document.getElementById("cp_confirm").addEventListener("input", function() {
    newpwd = document.getElementById("cp_new").value;
    confirmpwd = this.value;
    var msg = document.getElementById("cp_matchmsg");
    if (confirmpwd === "") {
        msg.innerText = "";
    } else if (newpwd === confirmpwd) {
        msg.innerText = "Passwords match";
        msg.style.color = "green";
    } else {
        msg.innerText = "Passwords do not match";
        msg.style.color = "red";
    }
});

function checkChangePwd(e) {
    e.preventDefault();
    var curpwd = document.getElementById("cp_current").value;
    newpwd = document.getElementById("cp_new").value;
    confirmpwd = document.getElementById("cp_confirm").value;
    clearErr("err_cp_current"); clearErr("err_cp_new"); clearErr("err_cp_confirm"); clearErr("suc_changepwd");

    if (!curpwd) { showErr("err_cp_current", "Current password is required"); document.getElementById("cp_current").focus(); return; }
    if (!newpwd) { showErr("err_cp_new", "New password is required"); document.getElementById("cp_new").focus(); return; }
    if (newpwd.length < 6) { showErr("err_cp_new", "New password must be at least 6 characters"); document.getElementById("cp_new").focus(); return; }
    if (!confirmpwd) { showErr("err_cp_confirm", "Please confirm new password"); document.getElementById("cp_confirm").focus(); return; }
    if (newpwd !== confirmpwd) { showErr("err_cp_confirm", "Passwords do not match"); document.getElementById("cp_confirm").focus(); return; }

    document.getElementById("suc_changepwd").innerText = "Form submitted.";
}

function checkRoomBook(e) {
    e.preventDefault();
    var name = document.getElementById("rb_name").value.trim();
    var email = document.getElementById("rb_email").value.trim();
    var blockRadio = document.querySelector("input[name='rb_block']:checked");
    var typeRadio = document.querySelector("input[name='rb_type']:checked");
    var checkin = document.getElementById("rb_checkin").value;
    clearErr("err_rb_name"); clearErr("err_rb_email"); clearErr("err_rb_block"); clearErr("err_rb_type"); clearErr("suc_roombooking");

    if (!name) { showErr("err_rb_name", "Full name is required"); document.getElementById("rb_name").focus(); return; }
    if (!email) { showErr("err_rb_email", "Email is required"); document.getElementById("rb_email").focus(); return; }
    if (!validEmail(email)) { showErr("err_rb_email", "Enter a valid email address"); document.getElementById("rb_email").focus(); return; }
    if (!blockRadio) { showErr("err_rb_block", "Please select a preferred block"); return; }
    if (!typeRadio) { showErr("err_rb_type", "Please select room type"); return; }

    document.getElementById("suc_roombooking").innerText = "Form submitted.";
}

function checkMessReg(e) {
    e.preventDefault();
    var name = document.getElementById("mr_name").value.trim();
    var regno = document.getElementById("mr_regno").value.trim();
    var mealRadio = document.querySelector("input[name='mr_meal']:checked");
    var timingRadio = document.querySelector("input[name='mr_timing']:checked");
    clearErr("err_mr_name"); clearErr("err_mr_regno"); clearErr("err_mr_meal"); clearErr("err_mr_timing"); clearErr("suc_messreg");

    if (!name) { showErr("err_mr_name", "Student name is required"); document.getElementById("mr_name").focus(); return; }
    if (!regno) { showErr("err_mr_regno", "Registration number is required"); document.getElementById("mr_regno").focus(); return; }
    if (!mealRadio) { showErr("err_mr_meal", "Please select a meal plan"); return; }
    if (!timingRadio) { showErr("err_mr_timing", "Please select preferred timing"); return; }

    document.getElementById("suc_messreg").innerText = "Form submitted.";
}

function checkComplaint(e) {
    e.preventDefault();
    var name = document.getElementById("mc_name").value.trim();
    var room = document.getElementById("mc_room").value.trim();
    var block = document.getElementById("mc_block").value;
    var issue = document.getElementById("mc_issue").value;
    var desc = document.getElementById("mc_desc").value.trim();
    clearErr("err_mc_name"); clearErr("err_mc_room"); clearErr("err_mc_block"); clearErr("err_mc_issue"); clearErr("err_mc_desc"); clearErr("suc_complaint");

    if (!name) { showErr("err_mc_name", "Student name is required"); document.getElementById("mc_name").focus(); return; }
    if (!room) { showErr("err_mc_room", "Room number is required"); document.getElementById("mc_room").focus(); return; }
    if (!block) { showErr("err_mc_block", "Please select a block"); document.getElementById("mc_block").focus(); return; }
    if (!issue) { showErr("err_mc_issue", "Please select issue type"); document.getElementById("mc_issue").focus(); return; }
    if (!desc) { showErr("err_mc_desc", "Description is required"); document.getElementById("mc_desc").focus(); return; }

    document.getElementById("suc_complaint").innerText = "Form submitted.";
}

function checkContact(e) {
    e.preventDefault();
    var name = document.getElementById("cf_name").value.trim();
    var email = document.getElementById("cf_email").value.trim();
    var subject = document.getElementById("cf_subject").value.trim();
    var msg = document.getElementById("cf_msg").value.trim();
    clearErr("err_cf_name"); clearErr("err_cf_email"); clearErr("err_cf_subject"); clearErr("err_cf_msg"); clearErr("suc_contact");

    if (!name) { showErr("err_cf_name", "Full name is required"); document.getElementById("cf_name").focus(); return; }
    if (!email) { showErr("err_cf_email", "Email is required"); document.getElementById("cf_email").focus(); return; }
    if (!validEmail(email)) { showErr("err_cf_email", "Enter a valid email address"); document.getElementById("cf_email").focus(); return; }
    if (!subject) { showErr("err_cf_subject", "Subject is required"); document.getElementById("cf_subject").focus(); return; }
    if (!msg) { showErr("err_cf_msg", "Message is required"); document.getElementById("cf_msg").focus(); return; }

    document.getElementById("suc_contact").innerText = "Form submitted.";
}

function calcTotal() {
    var qty = parseInt(document.getElementById("lc_qty").value);
    var type = document.getElementById("lc_type").value;
    var price = 0;
    var tot = 0;

    if (type === "shirt") price = 10;
    else if (type === "pant") price = 15;
    else if (type === "bedsheet") price = 25;

    if (isNaN(qty) || qty <= 0) {
        document.getElementById("calcresult").innerText = "Enter a valid quantity.";
        return;
    }

    tot = qty * price;
    document.getElementById("calcresult").innerText = "Total Cost: Rs." + tot;
}

document.getElementById("studreg").addEventListener("submit", checkStudReg);
document.getElementById("loginform").addEventListener("submit", checkLogin);
document.getElementById("changepwd").addEventListener("submit", checkChangePwd);
document.getElementById("roombooking").addEventListener("submit", checkRoomBook);
document.getElementById("messreg").addEventListener("submit", checkMessReg);
document.getElementById("complaint").addEventListener("submit", checkComplaint);
document.getElementById("contactform").addEventListener("submit", checkContact);
