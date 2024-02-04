player.onChat("House", function () {
    blocks.fill(
    COBBLESTONE,
    pos(-4, 0, -4),
    pos(4, 5, 4),
    FillOperation.Hollow
    )
    blocks.fill(
    GLASS,
    pos(-4, 1, -2),
    pos(-4, 3, 2),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_OAK,
    pos(-7, 6, -7),
    pos(7, 6, 7),
    FillOperation.Replace
    )
})
