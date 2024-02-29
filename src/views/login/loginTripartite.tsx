import { useAuthState } from "@stores/modules/auth"
import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
const LoginTripartite = () => {
    const navigate = useNavigate();
    const { loginTripartite } = useAuthState()
    const [searchParams] = useSearchParams();
    const login = async () => {
        const code = searchParams.get("code")
        await loginTripartite(code)
        navigate("/")
    }
    useEffect(() => {
        login()
    }, [])
    return (
        <></>
    )
}
export default LoginTripartite
