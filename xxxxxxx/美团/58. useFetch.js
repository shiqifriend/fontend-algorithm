function useFetch(initParam,fn){
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState<boolean>(true)
    const [error,setError]=useState('')
    const [param,setParam]=useState(initParam)
    const [isRun,setRun]=useState()
    useEffect(()=>{
        async function myRequset(){
            if(isRun){
                try{
                    let res=await fn(param)
                    if(res.status==200){
                        setData(res)
                    }
                }catch(e){
                    setError(e)
                }finally{
                    setLoading(false)
                }
        }
        myRequset()
       }},[isRun,param])// ...
    return {
        run:(param)=>{
            setRun(true)
            setParam(param)
        },
        loading,
        error,
        data
    }
}
