<template>
    <div class="col-md-4">
        <h2>{{title}}</h2>
        <div class="col-md-4">
            <img :src="imgUrl" style="width:120px; height:120px;" class="img-rounded" />
        </div>
        <div class="col-md-8">
            <p>
                {{description}}
            </p>
        </div>
    </div>
</template>
<script>
    import fetch from 'isomorphic-fetch'
    export default {
        name:'OG',
        props:["sourceUrl"],
        data(){
            return {
                imgUrl:'',
                title:'',
                description:''
            };
        },
        mounted:function(){
            let fetch_Parm = {
                method: 'GET',
                mode: 'cors'
            };

            let url = encodeURI(this.sourceUrl);

            fetch(`https://opengraph.io/api/1.0/site/${url}`, fetch_Parm)
                .then(resp => resp.json())
                .then(data => {
                    this.title = data.hybridGraph.title;
                    this.imgUrl = data.hybridGraph.image;
                    this.description=data.hybridGraph.description;
                    console.log(data)
                })
                .catch(err => {
                    dispatch(LoginFailAction(err));
                });
        }
    }
</script>