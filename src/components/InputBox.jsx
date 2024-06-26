export default function InputBox({label, textarea, ...props}) {
    return(
        <p>
            <label className="uppercase">{label}</label>
            {
                textarea ? <textarea {...props} /> : <input {...props} />
            }
        </p>
    );
}