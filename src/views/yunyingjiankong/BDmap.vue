<template>

  <div>
    <div id="allmap" style="width: 100%; height: 500px;border: 1px solid #ccc"></div>
  </div>
</template>
<script>
  //import BMap from 'BMap';
  export default {
    data:function(){
      return{
      }
    },
    mounted() {
        this.ready();
        this.$route.name
    },
    methods: {
      ready: function() {
        var map = new BMap.Map('allmap');
        var point = new BMap.Point(104.075796, 30.659684);
        map.centerAndZoom(point, 14);
        map.addControl(new BMap.MapTypeControl());
        map.enableScrollWheelZoom(true);
        map.enableDoubleClickZoom(true);
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);
      }
    }
  }
</script>
 
<!--Add"scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>