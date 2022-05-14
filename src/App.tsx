interface ButtonProps {
  Text?: string;
}

function Button(Props: ButtonProps) {
 return <button className="bg-violet-500 px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors" >{Props.Text ??  'Default'}</button>
}

function App() {
  return (
    <div className="flex gap-2">
      <Button Text="Enviar" />
      <Button Text="Ok" />
      <Button  />
    </div>
  )
}
export default App
