class bot
{
  get icon()
  {
    return $("#ask-maharaja")
  }
  get pic()
  {
    return $(".mah")
  }
  get input()
  {
    return $("#inputChat")
  }
  get send()
  {
    return $(".chat-btn")
  }
  get response()
  {
    return $$(".animate")
  }
  get bouncing()
  {
    return $(".bouncing-loader")
  }
}

module.exports=new bot()