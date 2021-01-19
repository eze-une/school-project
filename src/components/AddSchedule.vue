<template>
    <div>
        <form @submit="add_schedule">
            <input type="datetime-local" name="date" placeholder='dd-mm-yy' v-model="date">
            <input type="text" name="Department" placeholder="department" v-model="department">
            <input type="text" name="block" placeholder="block" v-model="block">
            <input type="text" name="section" placeholder="section" v-model="section">
            <input type="submit" value="submit">
        </form>
    </div>
</template>

<script>
import uuid from 'uuid';    //temporary until  we get the backend running
export default {
    name: 'AddSchedule',
    data(){
        return{
            date: '',
            department: '',
            block: '',
            section: ''
        }
    },
    methods:{
        add_schedule(e){
            e.preventDefault();
            const newSchedule={
                classId: uuid.v4(),
                date:this.data,
                department:this.department,
                block:this.department,
                section:this.section
            }
            //sending up to the parent
            this.$emit('add_schedule',newSchedule);
        }
    }
}
</script>

<style scoped>

</style>