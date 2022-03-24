<template>
    <AppHeader/>
    <div class="flex flex-row">
          <SideBar />
          <app-bookmark-list />
    </div>

</template>

<script>


import SideBar from '@/components/Home/SideBar'

export default {
    components :{
        SideBar
    }
}
</script>