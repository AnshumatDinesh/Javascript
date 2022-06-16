<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"    
                version="1.0">


    

<xsl:template match="/">  
    <html>
        <head>
            <title> Messenger</title>
            <link rel="stylesheet" href="learn.css"/>
        </head>
        <body>
            
                <xsl:for-each select="messenger/message">
                <div class="messages">
                    <p id="byline">
                        <b>
                            <xsl:value-of select="from"/>
                            --->
                            <xsl:value-of select="to"/>
                            <br/>
                        </b>
                    </p>
                    <p id="cntent">
                        <xsl:value-of select="content"/>
                        <br/>
                    </p>
                    <p id="sent">
                        sent on-
                        <xsl:value-of select="date"/>
                        <br/>
                    </p>
                </div>
            </xsl:for-each>
                
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>
