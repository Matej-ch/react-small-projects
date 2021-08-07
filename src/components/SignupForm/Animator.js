import {motion} from "framer-motion";

export default function Animator({children}) {
    return (
        <div className={'relative max-w-6xl mx-auto pt-4 min-w-'}>
            <motion.div
                style={{position: 'absolute', left:'0', right:'0' }}
                initial={{ x:200,scale:0.8, opacity: 0 }}
                animate={{ x:0,scale:1, opacity: 1 }}
                exit={{ x: -200,scale:0.8, opacity: 0 }} >
                {children}
            </motion.div>
        </div>
    )
}

