<template>
    <div class="container box">
        <h1 class="title">MT Council Line Front End: Q&A</h1>
        <b-message type="is-warning" title="ทดสอบระบบ">ระบบอยู่ในระหว่างการพัฒนาอาจจะยังไม่สามารถทำงานได้สมบูรณ์แบบ กรุณาใช้ช่องทางปกติในการถามคำถาม</b-message>
        <div class="container">
            <b-field>
                <b-select placeholder="โปรดเลือกหัวข้อคำถาม" disabled>
                    <option>วิชาการ</option>
                    <option>คะแนน CMTE</option>
                    <option>กฎหมาย</option>
                    <option>การประกอบวิชาชีพ</option>
                </b-select>
            </b-field>
            <b-field>
                <b-input maxlength="200" type="textarea" disabled placeholder="คำถาม"></b-input>
            </b-field>
            <div class="buttons">
                <button class="button" @click="closeWindow">Close</button>
                <button class="button is-primary">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        methods: {
            closeWindow() {
                this.$liff.closeWindow();
            }
        }
    }
</script>

