const FeaturesItem = ({ item, value, icon: Icon }: any) => {
  return (
    <div className="flex justify-between">
        <div className="flex gap-3 items-center">
            <Icon className="text-xl" />
            <p className="text-sm font-medium">{item}</p>
        </div>

        <p className="text-sm font-medium">{value}</p>
    </div>
  )
}

export default FeaturesItem
