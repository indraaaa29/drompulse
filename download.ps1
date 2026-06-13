$urls = @{
  "sustainability_impact.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1NDFmOGJlNjc3ZjIwOTI1ZDFmY2M5MjI5Y2M4EgsSBxDs29nXshQYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzk1MjIzMDI2NTA1NzkyODkzMg&filename=&opi=89354086"
  "room_insights.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1NDFmOGMxOGI2M2IwN2UwMDUzYzg4MjI1ZDk4EgsSBxDs29nXshQYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzk1MjIzMDI2NTA1NzkyODkzMg&filename=&opi=89354086"
  "ai_advisor.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1NDFmOGI4Mzk1NWUwMzgzOTAyNDI0MWZkODA5EgsSBxDs29nXshQYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzk1MjIzMDI2NTA1NzkyODkzMg&filename=&opi=89354086"
  "shader.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1NDFmODVlOTI4OGEwMmQzYzJhZTE4MTk5NDIzEgsSBxDs29nXshQYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzk1MjIzMDI2NTA1NzkyODkzMg&filename=&opi=89354086"
  "dormpulse_flow.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1NDFmOWIwNDk2NGEwMzM4NTlkYzZhMzY3NjM2EgsSBxDs29nXshQYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzk1MjIzMDI2NTA1NzkyODkzMg&filename=&opi=89354086"
  "sdg7_goals.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1NDFmOGU5ZDUwNTAwNmZmYzc2M2RkMmE4YjRiEgsSBxDs29nXshQYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzk1MjIzMDI2NTA1NzkyODkzMg&filename=&opi=89354086"
  "energy_overview.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1NDFmODg2YjRhZWUwOTEwN2M1Y2QxMmYxYzY1EgsSBxDs29nXshQYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzk1MjIzMDI2NTA1NzkyODkzMg&filename=&opi=89354086"
  "hostel_map.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1NDFmODg4YmVlZjYwN2M0ZWI1ZWViMDNhOTZiEgsSBxDs29nXshQYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzk1MjIzMDI2NTA1NzkyODkzMg&filename=&opi=89354086"
  "savings_timeline.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1NDFmOGI2ZmJiN2YwOTI1YzNhOWU0MWNlZjU0EgsSBxDs29nXshQYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzk1MjIzMDI2NTA1NzkyODkzMg&filename=&opi=89354086"
}

New-Item -ItemType Directory -Force -Path "e:\My data\projects\drompulse\temp_stitch"

foreach ($name in $urls.Keys) {
  $url = $urls[$name]
  Write-Host "Downloading $name..."
  Invoke-WebRequest -Uri $url -OutFile "e:\My data\projects\drompulse\temp_stitch\$name"
}
