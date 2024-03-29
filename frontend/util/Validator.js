function validate(pattern, array, index, e, saveBtn, updateBtn, deleteBtn) {
    if (pattern.test(array[index].val())) {
        array[index].css("border", "3px solid green");
        if (e.key === 'Enter') {
            array[index + 1].focus();
        }
        if ((updateBtn && deleteBtn) == null) {
            saveBtn.prop("disabled", false);
        } else {
            saveBtn.prop("disabled", false);
            updateBtn.prop("disabled", false);
            deleteBtn.prop("disabled", false);
        }
        return true;
    } else {
        if ((updateBtn && deleteBtn) == null) {
            saveBtn.prop("disabled", false);
        } else {
            array[index].css("border", "3px solid red");
            saveBtn.prop("disabled", true);
            updateBtn.prop("disabled", true);
            deleteBtn.prop("disabled", true);
        }
        return false;
    }
    return false;
}